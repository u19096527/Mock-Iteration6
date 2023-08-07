using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iteration6_API.Models
{
    public class AuditTrail
    {
        [Key]
        public int AuditTrail_ID { get; set; }

        [Required]
        public DateOnly Date { get; set; }

        [Required, StringLength(255)]
        public string Note { get; set; }

        //connecting AuditTrail to Employee
        public int Employee_ID { get; set; }

        public Employee Employees { get; set; }


    }
}
