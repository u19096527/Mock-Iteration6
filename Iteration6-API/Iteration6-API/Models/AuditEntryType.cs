using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class AuditEntryType
    {
        [Key]
        public int Audit_Entry_Type_ID { get; set; }
        [Required, StringLength(255)]
        public string Audit_Entry_Type { get; set; }

        public List<AuditTrail> AuditTrail { get; set; }

    }
}
