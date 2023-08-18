using Iteration6_API.Models;
using Iteration6_API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Iteration6_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditTrailController : ControllerBase
    {
        private readonly IAuditTrailRepository _auditTrailRepository;

        public AuditTrailController(IAuditTrailRepository auditTrailRepository)
        {
            _auditTrailRepository = auditTrailRepository;
        }


        // Adds a new voucher
        [HttpPost]
        [Route("GenerateAuditTrail")]
        public async Task<IActionResult> GenerateAuditTrail(AuditTrailVM AuditTrailVM)
        {
            try
            {
                //ASSIGNING VALUES TO NEW VOUCHER
                var newAuditTrail = new AuditTrail
                {
                    DateTimeStamp = DateTime.Now,
                    Comment = AuditTrailVM.Comment,
                    Employee_ID = 2,
                    Audit_Entry_Type_ID = AuditTrailVM.AuditEntryTypeID
                };

                _auditTrailRepository.Add(newAuditTrail);
                await _auditTrailRepository.SaveChangesAsync();

                return Ok(newAuditTrail);

            }

            catch (Exception err)
            {
                return BadRequest($"Error adding generating audit trail: {err.Message}");
            }

        }

        // Retrieves all the help tips
        [HttpGet]
        [Route("GetAllAuditTrails")]
        public async Task<IActionResult> GetAllAuditTrails()
        {
            try
            {
                var results = await _auditTrailRepository.GetAllAuditTrailsAsync();
                return Ok(results);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support");
            }
        }

    }
}
