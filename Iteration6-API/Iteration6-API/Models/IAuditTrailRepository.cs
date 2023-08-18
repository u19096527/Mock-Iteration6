using Iteration6_API.ViewModels;

namespace Iteration6_API.Models
{
    public interface IAuditTrailRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        Task<AuditTrailVM[]> GetAllAuditTrailsAsync();

    }
}
