using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.ViewModels
{
    public class AuditTrailVM
    {
        public int AuditEntryTypeID { get; set; }
        public DateTime DateTimeStamp { get; set; }
        public string Audit_Entry_Type { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Comment { get; set; }
        public AuditTrailVM(int auditEntryTypeID, DateTime dateTimeStamp, string audit_Entry_Type, string name, string surname, string comment)
        {
            AuditEntryTypeID = auditEntryTypeID;
            DateTimeStamp = dateTimeStamp;
            Audit_Entry_Type = audit_Entry_Type;
            Name = name;
            Surname = surname;
            Comment = comment;
        }

        public AuditTrailVM()
        {

        }

    }
}
