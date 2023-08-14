namespace Iteration6_API.ViewModels
{
    public class VoucherViewModel
    {
        public string VoucherCode { get; set; } = string.Empty;
        public int Percent { get; set; }
        public string Expiry_Date { get; set; }

        public VoucherViewModel(string voucherCode, int percent, string expiryDate)
        {
            VoucherCode = voucherCode;
            Percent = percent;
            Expiry_Date = expiryDate;
        }

        public VoucherViewModel() { }
    }
}
