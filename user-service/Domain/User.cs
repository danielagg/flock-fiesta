public class User
{
    public string Id { get; private set; }

    public Email Email { get; private set; }

    public UserName? FullName { get; private set; }

    // for EF Core
    protected User()
    {
        
    }

    public User(string id, Email email)
    {
        Id = id;
        Email = email;
    }

    public void UpdateUserName(UserName newFullName) => FullName = newFullName;
}