

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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


    [Authorize]
    [HttpGet("test1")]
    public async Task<IActionResult> GetTest1()
    {
        await Task.Delay(10);
        return Ok(new { Message = "Worked with JTW!"});
    }

    [AllowAnonymous]
    [HttpGet("test2")]
    public async Task<IActionResult> GetTest2()
    {
        await Task.Delay(10);
        return Ok(new { Message = "Worked with Allow Anon!"});
    }
}