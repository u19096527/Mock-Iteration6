using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class Help
    {
        [Key]
        public int Help_ID { get; set; }
        [Required, StringLength(10)]
        public string Date { get; set;}
        [Required, StringLength(100)]
        public string Name { get; set; }
        [Required, StringLength(255)]
        public string Description { get; set; }
        [Required, StringLength(255)]
        public string FileName { get; set; }
        [Required, MaxLengthAttribute]
        public string FilePath { get; set; }

        //CONNECTIONS
        //LINK TO EMPLOYEE
        public int? Employee_ID { get; set; }
        public Employee? Employees { get; set; }

    }
}
