namespace Iteration6_API.Models
{
    public interface INewsletterRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();
        Task<Newsletter[]> GetAllNewslettersAsync();
        Task<Newsletter[]> SortByDescendingAsync();


        Task<Newsletter[]> GetSearchedNewsletterAsync(string enteredQuery);

        void DeleteNewsletterBlobAsync(string name);

    }
}
