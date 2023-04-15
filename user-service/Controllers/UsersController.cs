

using Microsoft.AspNetCore.Mvc;

[Route("/")]
public class UsersController : ControllerBase
{
    private readonly IUsersAppService _appService;
    
    public UsersController(IUsersAppService appService)
    {
        _appService = appService;    
    }

    [HttpPost]
    public async Task<IActionResult> PersistUser([FromBody] PersistUserRequestDto data)
    {
        var result = await _appService.PersistUser(data.Id, data.Email);
        return Ok(PersistUserResponseDto.From(result));
    }

    [HttpGet]
    public async Task<IActionResult> GetLoggedInUser()
    {
        // todo:
        await Task.Delay(100);
        return Ok();
    }
}