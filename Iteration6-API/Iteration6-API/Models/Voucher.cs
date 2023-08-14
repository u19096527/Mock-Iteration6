using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class Voucher
    {
        [Key]
        public int Voucher_ID { get; set; }
        [Required, StringLength(5)]
        public string Voucher_Code { get; set; }
        [Required, Range(1,100)]
        public int Percent { get; set; }
        [Required, StringLength(10)]
        public string Expiry_Date { get; set; }

    }
}
