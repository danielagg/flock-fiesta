var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IOrganizationsAppService, OrganizationsAppService>();

var app = builder.Build();

app.MapControllers();

app.Run("https://localhost:3002");
