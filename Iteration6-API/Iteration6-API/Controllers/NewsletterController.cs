using Iteration6_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using Iteration6_API.ViewModels;
using System.Net;

namespace Iteration6_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsletterController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IBlobRepository _blobRepository;
        private readonly INewsletterRepository _newsletterRepository;


        public NewsletterController(IStudentRepository studentRepository, IBlobRepository blobRepository, INewsletterRepository newsletterRepository)
        {
            _studentRepository = studentRepository;
            _blobRepository = blobRepository;
            _newsletterRepository = newsletterRepository;
        }

        [HttpPost]
        [Route("SendNewsletter")]
        public async Task<IActionResult> SendNewsletter([FromForm] NewsletterVM newsletterVM)
        {
            try
            {
                // List of email addresses to send the email to
                Student[] arrSubscribedStudents = new Student[0];
                arrSubscribedStudents = await _studentRepository.GetSubscribedStudentsAsync();

                // Create a new email message
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("The Book Market", "unibooks.thebookmarket@gmail.com"));
                foreach (var recipient in arrSubscribedStudents)
                {
                    message.To.Add(new MailboxAddress(recipient.Name, recipient.Email)); // Recipient's name can be empty
                }
                message.Subject = newsletterVM.Subject;

                // Create the email body
                var bodyBuilder = new BodyBuilder();
                bodyBuilder.TextBody = "Hello! "+ newsletterVM.Description;

                //uploading newsletter to blob and getting link back
                //if new video is uploaded
                var file = newsletterVM.NewsletterFile;
                if (file != null && file.Length > 0)
                {
                    //sanitize the file name
                    string sanitizedFileName = Path.GetFileNameWithoutExtension(file.FileName)
                        .Replace(" ", "_")
                        .Replace("-", "_") // Replace hyphens with underscores if needed
                        .Replace("...", "_") // Replace multiple dots with a single underscore if needed
                        + Path.GetExtension(file.FileName);

                    //convert video to file data
                    byte[] fileData;
                    using (var memoryStream = new MemoryStream())
                    {
                        await file.CopyToAsync(memoryStream);
                        fileData = memoryStream.ToArray();
                    }
                    //assign sanitized file name
                    string fileName = sanitizedFileName;

                    // Upload the newsletter file to Blob storage using the BlobRepository
                    string blobUrl = await _blobRepository.UploadNewsletterBlob(fileName, fileData);
                    string filePath = blobUrl;
                    // Download the attachment content from the Blob URL
                    using (WebClient webClient = new WebClient())
                    {
                        byte[] attachmentBytes = webClient.DownloadData(blobUrl);
                        using (MemoryStream attachmentStream = new MemoryStream(attachmentBytes))
                        {
                            // Add an attachment using the attachmentStream
                            bodyBuilder.Attachments.Add(fileName, attachmentStream);
                        }
                    }

                    message.Body = bodyBuilder.ToMessageBody();

                    // Configure the SMTP client
                    using (var client = new SmtpClient())
                    {
                        client.Connect("smtp.gmail.com", 587, false); // Use the SMTP server and port of your email provider
                        client.Authenticate("unibooks.thebookmarket@gmail.com", "nzrtvdxrsdpleubc"); // Replace with your email and password

                        // Send the email
                        client.Send(message);
                        client.Disconnect(true);
                    }

                    foreach (var student in arrSubscribedStudents)
                    {
                        var newsletter = new Newsletter();
                        newsletter.Subject = newsletterVM.Subject;
                        newsletter.Description = newsletterVM.Description;
                        newsletter.Date = DateTime.Now.ToString("dd-MM-yyyy");
                        newsletter.FileName = fileName;
                        newsletter.FilePath = filePath;
                        newsletter.Employee_ID = 2;
                        newsletter.Student_ID = student.Student_ID;

                        _newsletterRepository.Add(newsletter);
                    }
                    await _newsletterRepository.SaveChangesAsync();
                    return Ok("Newsletter sent successfuly");

                }
                return BadRequest($"Error sending newsletter");

            }
            catch (Exception ex)
            {
                return BadRequest($"Error sending newsletter: {ex.Message}");
            }
        }


    }
}
