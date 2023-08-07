using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iteration6_API.Models
{
    public class User
    {
        [Key]
        public int User_ID { get; set; }
        [Required]
        [StringLength(100)]
        public string UserName { get; set; }
        [Required]
        [StringLength(100)]
        public string Password { get; set; }

        //CONNECTIONS
        //LINK TO USER ROLE
        public int User_Role_ID { get; set; }
        public User_Role UserRole { get; set; }
        //LINK TO EMPLOYEE
        public Employee Employees { get; set; }
        public Student Students { get; set; }

    }
}
