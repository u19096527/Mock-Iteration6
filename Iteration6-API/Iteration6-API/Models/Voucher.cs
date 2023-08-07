using System.ComponentModel.DataAnnotations;

namespace Iteration6_API.Models
{
    public class Voucher
    {
        [Key]
        public int Voucher_ID { get; set; }
        [Required, StringLength(5)]
        public string Voucher_Code { get; set; }
        [Required]
        public Decimal Percent { get; set; }
        [Required]
        public DateOnly Expiry_Date { get; set; }

    }
}
