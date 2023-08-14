using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iteration6_API.Models
{
    public class Newsletter
    {
        [Key]
        public int Newsletter_ID { get; set; }
        [Required, StringLength(100)]
        public string Subject { get; set; }
        [Required, MaxLengthAttribute]
        public string Description { get; set; }
        [Required, StringLength(10)]
        public string Date { get; set; }
        [Required, MaxLengthAttribute]
        public string? FileName { get; set; }
        [Required, MaxLengthAttribute]
        public string? FilePath { get; set; }

        //CONNECTIONS
        //LINK TO EMPLOYEE
        [Required]
        public int? Employee_ID { get; set; }
        public Employee? Employees { get; set; }

        //LINK TO STUDENT
        [Required]
        public int? Student_ID { get; set; }
        public Student? Students { get; set; }
    }
}
