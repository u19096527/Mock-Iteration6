using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class User_Role
    {
        [Key]
        public int UserRole_ID { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        //CONNECTIONS
        //LINK TO USER
        public List<User> Users { get; set; }


    }
}
