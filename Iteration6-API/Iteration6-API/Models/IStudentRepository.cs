namespace Iteration6_API.Models
{
    public interface IStudentRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        Task<Student[]> GetAllStudentsAsync();
        Task<Student> GetAStudentAsync(int Student_ID);

        Task<Student[]> GetSearchedStudentAsync(string enteredQuery);

        Task<Student[]> GetSubscribedStudentsAsync();


    }
}
