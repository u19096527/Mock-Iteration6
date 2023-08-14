using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Security.Policy;

namespace Iteration6_API.Models
{
    public class BlobRepository : IBlobRepository
    {
        private readonly BlobServiceClient _blobServiceClient;
        private BlobContainerClient helpClient, newsletterClient;
        public static readonly List<string> VideoExtensions = new List<string> { ".MP4", ".MOV" };

        public BlobRepository(BlobServiceClient blobServiceClient, AppDbContext appDbContext)
        {
            _blobServiceClient = blobServiceClient;
            helpClient = _blobServiceClient.GetBlobContainerClient("blobcontainerhelptip");
            newsletterClient = _blobServiceClient.GetBlobContainerClient("newslettercontainer");

        }

        public async Task<BlobObject> GetBlobFile(string url)
        {
            var fileName = new Uri(url).Segments.LastOrDefault();
            var blobClient = helpClient.GetBlobClient(fileName);
            //check if this file exists
            if (await blobClient.ExistsAsync())
            {
                BlobDownloadResult content = await blobClient.DownloadContentAsync();
                var downloadedData = content.Content.ToStream();

                if (VideoExtensions.Contains(Path.GetExtension(fileName.ToUpperInvariant())))
                {
                    var extension = Path.GetExtension(fileName);
                    return new BlobObject
                    {
                        Content = downloadedData,
                        ContentType = "video/" + extension.Remove(0, 1)
                    };
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }

        }

        public async Task<string> GenerateBlobStreamLinkAsync(string fileName)
        {
            var credentials = new StorageCredentials("unibooksstorageacc", "H1i/w5q/aqlY7WnwpKyl3TFz+dPvWTn2mrzPYSBNisf8AHZwPDhwgTv4M0A8rlzf5v/9VP7VyDSz+ASt3qZVAQ==");
            var account = new CloudStorageAccount(credentials, true);
            var container = account.CreateCloudBlobClient().GetContainerReference("blobcontainerhelptip");
            var blob = container.GetBlockBlobReference(fileName);
            var sas = blob.GetSharedAccessSignature(new SharedAccessBlobPolicy()
            {
                Permissions = SharedAccessBlobPermissions.Read,
                SharedAccessExpiryTime = DateTime.UtcNow.AddHours(1),//Set this date/time according to your requirements
            });
            string urlToBePlayed = string.Format("{0}{1}", blob.Uri, sas);//This is the URI which should be embedded in your video player.
            return urlToBePlayed;
        }
        public async Task<string> UploadBlobFile(string fileName, byte[] fileData)
        {
            // Check if the file data is empty
            if (fileData == null || fileData.Length == 0)
                throw new ArgumentException("File data is empty.");

            // Check if the file is a video
            var fileExtension = Path.GetExtension(fileName).ToUpperInvariant();
            if (!VideoExtensions.Contains(fileExtension))
                throw new ArgumentException("Only video files are allowed.");

            // Upload the video file to Blob storage
            var blobClient = helpClient.GetBlobClient(fileName);
            var status = await blobClient.UploadAsync(new MemoryStream(fileData));

            // This returns a string of where exactly your file is stored
            return blobClient.Uri.AbsoluteUri;
        }

        public async Task<string> UploadNewsletterBlob(string fileName, byte[] fileData)
        {
            // Check if the file data is empty
            if (fileData == null || fileData.Length == 0)
                throw new ArgumentException("File data is empty.");

            // Upload the file to Blob storage
            var blobClient = newsletterClient.GetBlobClient(fileName);
            var status = await blobClient.UploadAsync(new MemoryStream(fileData));

            // This returns a string of where exactly your file is stored
            return blobClient.Uri.AbsoluteUri;
        }


        public async void DeleteBlob(string path)
        {
            var fileName = path;
            //new Uri(path).Segments.LastOrDefault();
            var blobClient = helpClient.GetBlobClient(fileName);
            await blobClient.DeleteIfExistsAsync();

        }
        public async Task<List<string>> ListBlobs()
        {
            List<string> lst = new List<string>();
            await foreach (var blobItem in helpClient.GetBlobsAsync())
            {
                lst.Add(blobItem.Name);
            }
            return lst;
        }


    }
}
