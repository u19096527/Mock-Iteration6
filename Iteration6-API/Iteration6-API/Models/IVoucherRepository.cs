using Iteration6_API.ViewModels;

namespace Iteration6_API.Models
{
    public interface IVoucherRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<Voucher[]> GetAllVouchersAsync();
        Task<Voucher[]> SearchVoucherPercentAsync(int enteredQuery);
        Task<Voucher> SearchDuplicateVoucherAsync(VoucherViewModel enteredVoucher);

        Task<Voucher> GetAVoucherAsync(int voucher_ID);
        Task<bool> SaveChangesAsync();
    }
}
