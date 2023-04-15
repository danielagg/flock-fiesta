var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IUsersAppService, UsersAppService>();

var app = builder.Build();

app.MapControllers();

app.Run("https://localhost:3001");
