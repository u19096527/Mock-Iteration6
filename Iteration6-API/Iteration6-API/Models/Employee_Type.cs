using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class Employee_Type
    {
        [Key]
        public int Employee_Type_ID { get; set; }
        [Required, StringLength(100)]
        public string Name { get; set; }
        [Required, StringLength(255)]
        public string Description { get; set; }

        //CONNECTIONS
        //LINK TO EMPLOYEE
        public List<Employee> Employees { get; set; }
    }
}
