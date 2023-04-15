

using Microsoft.AspNetCore.Mvc;

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
}