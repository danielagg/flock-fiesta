using Microsoft.EntityFrameworkCore;

public static class DatabaseExtensions
{
    public static void SetupDatabase(this IServiceCollection services, ConfigurationManager config)
    {
        var dbConnectionString = config["Database:ConnectionString"]!;
        services.AddDbContext<ApplicationDbContext>(options => options.UseMySQL(dbConnectionString, mySql => {
            mySql.MigrationsHistoryTable("__MigrationHistory", ApplicationDbContext.DefaultSchema);
        }));
    }

    public static void Migrate(WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var services = scope.ServiceProvider;
            var dbContext = services.GetRequiredService<ApplicationDbContext>();
            
            dbContext.Database.EnsureCreated();
            dbContext.Database.Migrate();
        }
    }
}