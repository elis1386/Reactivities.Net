using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        private IMediator? _mediotor;
        protected IMediator Mediator =>
            _mediotor ??= HttpContext.RequestServices.GetService<IMediator>()
            ?? throw new InvalidOperationException("IMediator service is unavailable") ?? throw new InvalidOperationException("IMediator service is unavailable");
        protected ActionResult HandleResult<T>(Result<T> result)
        {
            if (!result.IsSuccess && result.Code == 404) return NotFound();
            if (result.IsSuccess && result.Value != null) return Ok(result.Value);
            return BadRequest(result.Error);
        }
    }
}
