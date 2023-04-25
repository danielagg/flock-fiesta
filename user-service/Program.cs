

var builder = WebApplication.CreateBuilder(args);

builder.Services.SetupAuthentication(builder.Configuration);
builder.Services.AddAuthorization();

builder.Services.AddControllers();

builder.Services.SetupDatabase(builder.Configuration);

builder.Services.AddScoped<IUsersAppService, UsersAppService>();

var app = builder.Build();

app.MapControllers();

DatabaseExtensions.Migrate(app);

app.Run("https://localhost:3001");