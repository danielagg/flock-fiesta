public class PersistUserResponseDto
{
    public string Id { get; private set; }
    public string Email { get; private set; }
    public string? FirstName { get; private set; }
    public string? LastName { get; private set; }

    private PersistUserResponseDto(User user)
    {
        Id = user.Id;
        Email = user.Email.Address;
        FirstName = user.FullName?.FirstName;
        LastName = user.FullName?.LastName;
    }

    public static PersistUserResponseDto From(User user) => new(user);
}