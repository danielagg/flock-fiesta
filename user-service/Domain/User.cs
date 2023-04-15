public class User
{
    public string Id { get; }
    public Email Email { get; }
    public UserName? FullName { get; private set; }

    public User(string id, Email email)
    {
        Id = id;
        Email = email;
    }

    public void UpdateUserName(UserName newFullName) => FullName = newFullName;
}