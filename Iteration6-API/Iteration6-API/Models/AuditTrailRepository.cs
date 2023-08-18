using Azure.Storage.Blobs;
using Iteration6_API.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace Iteration6_API.Models
{
    public class AuditTrailRepository : IAuditTrailRepository
    {
        private readonly AppDbContext _appDbContext;

        public AuditTrailRepository(AppDbContext appDbContext)
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

        public async Task<bool> SaveChangesAsync()
        {
            return await _appDbContext.SaveChangesAsync() > 0;
        }

        public async Task<AuditTrailVM[]> GetAllAuditTrailsAsync()
        {
            IQueryable<AuditTrailVM> query = _appDbContext.AuditTrails
                .Join(
                    _appDbContext.Employees,
                    auditTrail => auditTrail.Employee_ID,
                    employee => employee.Employee_ID,
                    (auditTrail, employee) => new { auditTrail, employee }
                )
                .Join(
                    _appDbContext.AuditEntryTypes,
                    joined => joined.auditTrail.Audit_Entry_Type_ID,
                    auditEntryType => auditEntryType.Audit_Entry_Type_ID,
                    (joined, auditEntryType) => new AuditTrailVM
                    {
                        AuditEntryTypeID = auditEntryType.Audit_Entry_Type_ID,
                        DateTimeStamp = joined.auditTrail.DateTimeStamp,
                        Audit_Entry_Type = auditEntryType.Audit_Entry_Type,
                        Name = joined.employee.Name,
                        Surname = joined.employee.Surname,
                        Comment = joined.auditTrail.Comment
                    }
                );

            return await query.ToArrayAsync();
        }

    }
}
