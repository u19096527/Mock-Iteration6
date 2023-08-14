using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iteration6_API.Models
{
    public class Employee
    {
        [Key]
        public int Employee_ID { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        [StringLength(100)]
        public string Surname { get; set; }
        [Required]
        [StringLength(10)]
        public string Cell_Number { get; set; }
        [Required]
        [StringLength(100)]
        public string Email { get; set; }
        [Required]
        [MaxLengthAttribute]
        public string Physical_Address { get; set; }
        [Required, StringLength(10)]
        public string BirthDate { get; set; }
        [Required]
        [StringLength(100)]
        public string Emergency_Contact_Name { get; set; }
        [Required]
        [StringLength(10)]
        public string Emergency_Contact_Cell { get; set; }

        //CONNECTIONS
        //link to employeeType
        public int Employee_Type_ID { get; set; }
        public Employee_Type EmployeeType { get; set; }

        //link to users 
        public int User_ID { get; set; }
        public User Users { get; set; }

        //link to help 
        public List<Help> Help { get; set; }

        //link to audit trails 
        public List<AuditTrail> AuditTrail { get; set; }

        //link to newsletter 
        [JsonIgnore]
        public List<Newsletter> Newsletters { get; set; }
    }
}
