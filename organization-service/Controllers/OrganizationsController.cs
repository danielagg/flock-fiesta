

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

[Route("/")]
public class OrganizationsController : ControllerBase
{
    private readonly IOrganizationsAppService _appService;
    
    public OrganizationsController(IOrganizationsAppService appService)
    {
        _appService = appService;    
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var result = await _appService.GetOrganizationOfLoggedInUser();
        return Ok(result);
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