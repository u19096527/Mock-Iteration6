using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Iteration6_API.Models
{
    public class Student
    {
        [Key]
        public int Student_ID { get; set; }
        [Required, StringLength(100)]
        public string Name { get; set; }
        [Required, StringLength(100)]
        public string Surname { get; set; }
        [Required, StringLength(10)]
        public string Cell_Number { get; set; }
        [Required, StringLength(100)]
        public string Email { get; set; }
        [Required]
        public Boolean Subscribed { get; set; }

        //CONNECTIONS
        //LINK TO USER
        [AllowNull]
        public int? User_ID { get; set; }
        public User Users { get; set; }

        // Link to newsletter
        public List<Newsletter> Newsletters { get; set; }


    }
}
