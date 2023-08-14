using Microsoft.EntityFrameworkCore;
using Iteration6_API.Models;
using Iteration6_API.ViewModels;

namespace Iteration6_API.Models
{
    public class VoucherRepository : IVoucherRepository
    {
        private readonly AppDbContext _appDbContext;

        public VoucherRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void Add<T>(T entity) where T : class
        {
            _appDbContext.Add(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _appDbContext.Remove(entity);
        }

        public async Task<Voucher[]> GetAllVouchersAsync()
        {
            IQueryable<Voucher> query = _appDbContext.Vouchers;
            return await query.ToArrayAsync();
        }

        public async Task<Voucher[]> SearchVoucherPercentAsync(int enteredQuery)
        {
            int searchedVoucherPercent;
            searchedVoucherPercent = enteredQuery;
            IQueryable<Voucher> query = _appDbContext.Vouchers.Where(a => a.Percent == searchedVoucherPercent);
            return await query.ToArrayAsync();
        }

        public async Task<Voucher> SearchDuplicateVoucherAsync(VoucherViewModel enteredVoucher)
        {
            VoucherViewModel voucher;
            voucher = enteredVoucher;            
            IQueryable<Voucher> query = _appDbContext.Vouchers.Where(a => a.Percent == voucher.Percent && a.Expiry_Date == voucher.Expiry_Date);
            return await query.FirstOrDefaultAsync();
        }

        public async Task<Voucher> GetAVoucherAsync(int voucher_ID)
        {
            IQueryable<Voucher> query = _appDbContext.Vouchers.Where(c => c.Voucher_ID == voucher_ID);
            return await query.FirstOrDefaultAsync();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _appDbContext.SaveChangesAsync() > 0;
        }
    }
}
