using Iteration6_API.Models;
using Iteration6_API.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Iteration6_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private readonly IStudentRepository _studentRepository;

        public StudentController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        [HttpGet]
        [Route("GetAllStudents")]
        public async Task<IActionResult> GetAllStudents()
        {
            try
            {
                var results = await _studentRepository.GetAllStudentsAsync();
                return Ok(results);
            }
            catch (Exception ex) 
            { 
                return BadRequest($"Error getting all students: {ex.Message}"); 
            }
        }


        [HttpGet]
        [Route("GetSubscribedStudents")]
        public async Task<IActionResult> GetSubscribedStudents()
        {
            try
            {
                var results = await _studentRepository.GetSubscribedStudentsAsync();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting all students: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetAStudent/{Student_ID}")]
        public async Task<IActionResult> GetAStudent(int Student_ID)
        {
            try
            {
                var answer = await _studentRepository.GetAStudentAsync(Student_ID);

                if (answer == null) return NotFound("Student does not exist");

                return Ok(answer);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting a student: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetSearchedStudent/{enteredQuery}")]
        public async Task<IActionResult> GetSearchedStudent(string enteredQuery)
        {
            try
            {
                var result = await _studentRepository.GetSearchedStudentAsync(enteredQuery);
                if (result == null)
                {
                    return NotFound("Student does not exist. You may need to create it first");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error searching student: {ex.Message}");
            }
        }

        // Adds a new help tip
        [HttpPost]
        [Route("AddStudent")]
        public async Task<IActionResult> AddStudent([FromForm] StudentVM newStudent)
        {
            var student = new Student
            {
                Name = newStudent.Name,
                Surname = newStudent.Surname,
                Cell_Number = newStudent.Cell_Number,
                Email = newStudent.Email,
                Subscribed = newStudent.Subscribed
            };

            try
            {
                _studentRepository.Add(student);
                await _studentRepository.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest($"Error adding a student: {ex.Message}");
            }
            return Ok(student);
        }

        // Edits details of a student
        [HttpPut]
        [Route("EditStudent/{Student_ID}")]
        public async Task<ActionResult<StudentVM>> EditStudent(int Student_ID, StudentVM studentModel)
        {
            try
            {
                var existingStudent = await _studentRepository.GetAStudentAsync(Student_ID);
                if (existingStudent == null)
                {
                    return NotFound($"The student does not exist");
                }

                existingStudent.Name = studentModel.Name;
                existingStudent.Surname = studentModel.Surname;
                existingStudent.Cell_Number = studentModel.Cell_Number;
                existingStudent.Email = studentModel.Email;
                existingStudent.Subscribed = studentModel.Subscribed;

                if (await _studentRepository.SaveChangesAsync())
                {
                    return Ok(existingStudent);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error adding a student: {ex.Message}");
            }
            return BadRequest("Your request is invalid");
        }

        // Deletes a student
        [HttpDelete]
        [Route("DeleteStudent/{Student_ID}")]
        public async Task<IActionResult> DeleteStudent(int Student_ID)
        {
            try
            {
                var existingStudent = await _studentRepository.GetAStudentAsync(Student_ID);
                if (existingStudent == null)
                {
                    return NotFound($"The student does not exist");
                }

                _studentRepository.Delete(existingStudent);

                if (await _studentRepository.SaveChangesAsync())
                {
                    return Ok(existingStudent);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error deleting a student: {ex.Message}");
            }
            return BadRequest("Your request is invalid");
        }
    }
}
