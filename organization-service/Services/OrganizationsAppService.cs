
public interface IOrganizationsAppService
{
    Task<Organization> GetOrganizationOfLoggedInUser();
}

public class OrganizationsAppService : IOrganizationsAppService
{
    public async Task<Organization> GetOrganizationOfLoggedInUser()
    {
        await Task.Delay(100);
        return new("My Company");
    }
}