using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public static string DefaultSchema = "users";

    public DbSet<User> Users { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema(DefaultSchema);

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.OwnsOne(e => e.Email);
            entity.OwnsOne(e => e.FullName);
        });
    }
}