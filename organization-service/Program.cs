using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(x =>
    {
        var rsa = RSA.Create();
        rsa.ImportFromPem(builder.Configuration["Authentication:JwtPemPublicKey"]);

        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidIssuer = builder.Configuration["Authentication:ValidIssuer"],
            IssuerSigningKey = new RsaSecurityKey(rsa),
            ValidateLifetime = true,
            ValidateIssuer = true,
            ValidateIssuerSigningKey = true,
            ValidateAudience = false,
        };
    });

builder.Services.AddControllers();
builder.Services.AddScoped<IOrganizationsAppService, OrganizationsAppService>();

var app = builder.Build();

app.MapControllers();

app.Run("https://localhost:3002");
