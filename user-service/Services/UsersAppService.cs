public interface IUsersAppService
{
    Task<User> PersistUser(string id, string email);
}

public class UsersAppService : IUsersAppService
{
    public async Task<User> PersistUser(string id, string email)
    {
        await Task.Delay(100);
        return new(id, new(email));
    }
}