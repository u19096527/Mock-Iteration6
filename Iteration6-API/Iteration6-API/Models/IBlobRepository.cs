namespace Iteration6_API.Models
{
    public interface IBlobRepository
    {
        Task<BlobObject> GetBlobFile(string name);
        //Task<string> UploadBlobFile(string fileName, string filePath);
        void DeleteBlob(string name);
        Task<List<string>> ListBlobs();
        Task<string> UploadBlobFile(string fileName, byte[] fileData);
        Task<string> GenerateBlobStreamLinkAsync(string fileName);
        Task<string> UploadNewsletterBlob(string fileName, byte[] fileData);

    }
}
