
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;

public static class AuthenticationExtensions
{
    public static void SetupAuthentication(this IServiceCollection services, ConfigurationManager config)
    {
    services
        .AddAuthentication(x =>
        {
            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(x =>
        {
            x.TokenValidationParameters = new TokenValidationParameters
            {
                ValidIssuer = config["Authentication:ValidIssuer"],
                ValidateLifetime = true,
                ValidateIssuer = true,
                ValidateIssuerSigningKey = true,
                ValidateAudience = false,
                IssuerSigningKeyResolver = (string token, SecurityToken securityToken, string kid, TokenValidationParameters validationParameters) =>
                {
                    var jwksUri = $"{config["Authentication:ValidIssuer"]}/.well-known/jwks.json";

                    JsonWebKeySet jwks;
                    using (HttpClient httpClient = new HttpClient())
                    {
                        string json = httpClient.GetStringAsync(jwksUri).GetAwaiter().GetResult();
                        jwks = new JsonWebKeySet(json);
                    }

                    var signingKey = jwks.Keys.FirstOrDefault(key => key.Kid == kid && key.Use == "sig");

                    if (signingKey == null)
                        throw new SecurityTokenSignatureKeyNotFoundException("Unable to find a signing key that matches the key identifier (kid) in the token header.");

                    var rsa = RSA.Create();
                    rsa.ImportParameters(new RSAParameters
                    {
                        Modulus = Base64UrlEncoder.DecodeBytes(signingKey.N),
                        Exponent = Base64UrlEncoder.DecodeBytes(signingKey.E)
                    });

                    return new List<SecurityKey> { new RsaSecurityKey(rsa) };
                },
            };
        });
    }
}