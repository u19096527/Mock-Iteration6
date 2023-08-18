using Org.BouncyCastle.Asn1.Cms;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iteration6_API.Models
{
    public class AuditTrail
    {
        [Key]
        public int AuditTrail_ID { get; set; }

        [Required]
        public DateTime DateTimeStamp { get; set; }
        [Required, StringLength(255)]
        public string Comment { get; set; }

        //connecting AuditTrail to Employee
        public int Employee_ID { get; set; }

        public Employee Employees { get; set; }

        //connecting AuditTrail to AuditEntryType
        public int Audit_Entry_Type_ID { get; set; }
        public AuditEntryType AuditEntryTypes { get; set; }


    }
}
