using Azure.Storage.Blobs;
using Iteration6_API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
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

        public async Task<Newsletter[]> GetAllNewslettersAsync()
        {
            var newsletters = await _appDbContext.Newsletters
                .GroupBy(n => n.Subject)
                .OrderBy(g => g.Max(n => n.Date))
                .Select(g => new Newsletter
                {
                    Subject = g.Key,
                    Recipients = g.Count(),
                    Description = g.Max(n => n.Description),
                    Date = g.Max(n => n.Date),
                    FileName = g.Max(n => n.FileName),
                    FilePath = g.Max(n => n.FilePath)
                    // You might need to populate other properties here too
                })
                .ToArrayAsync();

            return newsletters;
        }

        public async Task<Newsletter[]> SortByDescendingAsync()
        {
            var newsletters = await _appDbContext.Newsletters
                .GroupBy(n => n.Subject)
                .OrderByDescending(g => g.Max(n => n.Date))
                .Select(g => new Newsletter
                {
                    Subject = g.Key,
                    Recipients = g.Count(),
                    Description = g.Max(n => n.Description),
                    Date = g.Max(n => n.Date),
                    FileName = g.Max(n => n.FileName),
                    FilePath = g.Max(n => n.FilePath)
                    // You might need to populate other properties here too
                })
                .ToArrayAsync();

            return newsletters;
        }



        public async Task<Newsletter[]> GetSearchedNewsletterAsync(string enteredQuery)
        {
            IQueryable<Newsletter> query = _appDbContext.Newsletters.Where(c => c.Subject.Contains(enteredQuery)
                                                    || c.Description.Contains(enteredQuery));
            return await query.ToArrayAsync();
        }

        public async void DeleteNewsletterBlobAsync(string path)
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
