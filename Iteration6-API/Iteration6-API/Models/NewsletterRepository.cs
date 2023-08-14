using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;
using System.IO;

namespace Iteration6_API.Models
{
    public class NewsletterRepository : INewsletterRepository
    {
        private readonly AppDbContext _appDbContext;
        private readonly BlobServiceClient _blobServiceClient;
        private BlobContainerClient client;

        public NewsletterRepository(AppDbContext appDbContext, BlobServiceClient blobServiceClient)
        {
            _appDbContext = appDbContext;
            _blobServiceClient = blobServiceClient;
            client = _blobServiceClient.GetBlobContainerClient("newslettercontainer");

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

        public async Task<Newsletter[]> GetSearchedNewsletter(string enteredQuery)
        {
            IQueryable<Newsletter> query = _appDbContext.Newsletters.Where(c => c.Subject.Contains(enteredQuery)
                                                    || c.Description.Contains(enteredQuery));
            return await query.ToArrayAsync();
        }

        public async void DeleteNewsletterBlob(string path)
        {
            var fileName = new Uri(path).Segments.LastOrDefault();
            var blobClient = client.GetBlobClient(fileName);
            await blobClient.DeleteIfExistsAsync();

        }

        public async void DeleteBlob(string path)
        {

        }


    }
}
