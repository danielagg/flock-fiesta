
public class Organization
{
    public string Id { get; private set; }
    public string Name { get; private set; }

    public Organization(string name)
    {
        Id = Guid.NewGuid().ToString();
        Name = name;
    }
}