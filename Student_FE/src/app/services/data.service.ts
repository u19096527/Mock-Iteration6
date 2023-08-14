import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Supplier } from '../shared/supplier';
import { Module } from 'src/app/shared/module';
import { EmployeeType } from 'src/app/shared/employee-type';
import { Voucher } from '../shared/voucher';
import { Student } from '../shared/student';
import { Equipment } from '../shared/equipment';
import { Vat } from '../shared/vat';
import { EquipmentType } from '../shared/equipment_type';
import { Faculty } from '../shared/faculty';
import { Department } from '../shared/department';
import { Book, Books } from '../shared/books';
import { ResellerVM } from '../shared/ResellerViewModel';
import { resellerbookingVM } from '../shared/ResellerBookingVM';
import { Schedule } from '../shared/schedules';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ShoppingCart, ShoppingCartBook, ShoppingCartEquipment } from '../shared/shoppingcart';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://localhost:7022/api/'

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {

  }


  showProfile: boolean = false;
  // Function to toggle the showProfile value when the button is clicked
  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  AddSchedule(sche: Schedule): Observable<Schedule> {
    return this.httpClient.post<Schedule>(`${this.apiUrl}Schedules/AddSchedule`, sche)
      .pipe(
        tap((response) => console.log('AddSchedule Response:', response))
      );
  }



  //reseller
  // Get book estimate
  getBookEstimate(ISBN: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reseller/CheckBookEstimate/${ISBN}`)
      .pipe(map(result => [result])); // Wrap the single object in an array
  }

  // Add book to resale cart
  addBookToResaleCart(resellerData: ResellerVM): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Reseller/AddBookToResaleCart`, resellerData)
      .pipe(map(result => result));
  }
  // Create booking
  createBooking(scheduleId: number): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Reseller/CreateBooking/${scheduleId}`, null)
      .pipe(
        tap((response) => console.log('AddBooking Response:', response)),
        catchError((error) => {
          console.error('Error creating booking:', error);
          return throwError('Something went wrong while creating the booking. Please try again later.');
        })
      );
  }
  // Add booking
  addBooking(resellerBookingData: resellerbookingVM): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Reseller/AddBooking`, resellerBookingData)
      .pipe(map(result => result));
  }
  // Evaluate book
  evaluateBook(bookingRef: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reseller/EvaluateBook/${bookingRef}`)
      .pipe(map(result => result));
  }
  // Book evaluated
  bookEvaluated(resellerBookId: number): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Reseller/BookEvaluated/${resellerBookId}`, null)
      .pipe(map(result => result));
  }
  // Write evaluation book log
  //writeEvaluationBookLog(logData: EvaluationBookLogViewModel): Observable<any> {
  // return this.httpClient.post(`${this.apiUrl}Reseller/WriteEvaluationBookLog`, logData)
  //  .pipe(map(result => result));
  //}
  // Log resale exchange
  //logResaleExchange(logId: number, logData: ResaleLogViewModel): Observable<any> {
  //return this.httpClient.post(`${this.apiUrl}Reseller/LogResaleExchange/${logId}`, logData)
  //.pipe(map(result => result));
  //}
  // Get pending booking
  getPendingBooking(studentId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reseller/PendingBooking/${studentId}`)
      .pipe(map(result => result));
  }
  // Get evaluation booked
  getEvaluationBooked(studentId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reseller/EvaluationBooked/${studentId}`)
      .pipe(map(result => result));
  }
  // Get evaluation completed
  getEvaluationCompleted(studentId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reseller/EvaluationCompleted/${studentId}`)
      .pipe(map(result => result));
  }









  //---------------------------------------------------Employee Type-----------------------------------------------
  //Get all employee types
  getAllEmployeeTypes(): Observable<EmployeeType[]> {
    const url = `${this.apiUrl}EmployeeType/GetAllEmployeeTypes`;
    return this.httpClient.get<EmployeeType[]>(url);
  }

  //Get Employee Type by Id
  getEmployeeType(employeeTypeId: number): Observable<EmployeeType> {
    const url = `${this.apiUrl}EmployeeType/GetEmployeeType/${employeeTypeId}`;
    return this.httpClient.get<EmployeeType>(url);
  }

  //Add Employee Type
  addEmployeeType(employeeType: EmployeeType): Observable<EmployeeType> {
    const url = `${this.apiUrl}EmployeeType/AddEmployeeType`; // Update the URL to call the correct endpoint
    return this.httpClient.post<EmployeeType>(url, employeeType);
  }


  //Update Employee Type
  updateEmployeeType(employeeTypeId: number, employeeType: EmployeeType): Observable<EmployeeType> {
    const url = `${this.apiUrl}EmployeeType/EditEmployeeType/${employeeTypeId}`;
    return this.httpClient.put<EmployeeType>(url, employeeType);
  }

  //Delete Employee Type
  deleteEmployeeType(employeeTypeId: number): Observable<EmployeeType> {
    const url = `${this.apiUrl}EmployeeType/DeleteEmployeeType/${employeeTypeId}`;
    return this.httpClient.delete<EmployeeType>(url);
  }

  //Search Employee Type
  getEmployeeTypes(input: string): Observable<EmployeeType[]> {
    const url = `${this.apiUrl}EmployeeType/GetEmployeeTypeInput/${input}`;
    return this.httpClient.get<EmployeeType[]>(url);
  }

  //---------------------------------------------------------VOUCHERS-----------------------------------------------------------//
  GetAllTheVouchers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Voucher/GetAllVouchers`).pipe(map(result => result))
  }

  AddNewVoucher(newVoucher: Voucher) {
    return this.httpClient.post(this.apiUrl + `Voucher/AddVoucher`, newVoucher);
  }

  UpdateAVoucher(Voucher_ID: number, updatedVoucher: Voucher) {
    return this.httpClient.put(this.apiUrl + `Voucher/EditVoucher/${Voucher_ID}`, updatedVoucher);
  }

  DeleteVoucher(Voucher_ID: number) {
    return this.httpClient.delete(this.apiUrl + `Voucher/DeleteVoucher/${Voucher_ID}`);
  }

  GetSelectedVoucher(Voucher_ID: number) {
    return this.httpClient.get(this.apiUrl + `Voucher/GetAVoucher/${Voucher_ID}`);
  }

  SearchVoucher(enteredQuery: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Voucher/GetSearchedVouchers/${enteredQuery}`).pipe(map(result => result));
  }

  SearchStudent(enteredQuery: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Student/GetSearchedStudents/${enteredQuery}`).pipe(map(result => result));
  }

  //--------------------------------------- VAT-------------------------------------------------------------------------------------
  GetVAT(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}VAT/GetVAT`)
      .pipe(map(result => result))
  }

  EditVAT(vat: Vat) {
    return this.httpClient.put(this.apiUrl + `VAT/EditVAT`, vat);

  }

  //---------------------------------------------------------STUDENTS-----------------------------------------------------------//
  GetAllTheStudents(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Student/GetAllStudents`).pipe(map(result => result))
  }
  AddNewStudent(newStudent: Student) {
    return this.httpClient.post(this.apiUrl + `Student/AddStudent`, newStudent);
  }
  UpdateAStudent(student_ID: number, updatedStudent: Student) {
    return this.httpClient.put(this.apiUrl + `Student/EditStudent/${student_ID}`, updatedStudent);
  }
  DeleteStudent(student_ID: number) {
    return this.httpClient.delete(this.apiUrl + `Student/DeleteStudent/${student_ID}`);
  }
  GetSelectedStudent(student_ID: number) {
    return this.httpClient.get(this.apiUrl + `Student/GetAStudent/${student_ID}`);
  }

  //---------------------------------------------------Supplier-----------------------------------------------
  //Get All Suppliers
  GetAllSuppliers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Supplier/GetAllSuppliers`)
      .pipe(map(result => result))
  }

  //Add Supplier
  AddSupplier(supp: Supplier) {
    return this.httpClient.post(this.apiUrl + `Supplier/AddSupplier`, supp);
  }

  //Update a Supplier
  UpdateSupplier(supplier_ID: Number, supp: Supplier) {
    return this.httpClient.put(this.apiUrl + `Supplier/EditSupplier/${supplier_ID}`, supp);
  }

  //Delete a supplier
  DeleteSupplier(supplier_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `Supplier/DeleteSupplier/${supplier_ID}`);
  }


  //Get Supplier by ID
  GetSupplier(supplier_ID: Number) {
    return this.httpClient.get(this.apiUrl + `Supplier/GetSupplier/${supplier_ID}`);
  }

  //Get suppliers by text
  SearchSupplier(input: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Supplier/GetSupplierInput/${input}`)
      .pipe(map(result => result))
  }



  //-----------------------------------------------------------------Equipment Type--------------------------------------------------------

  //Get all the equipment types
  GetAllEquipmentTypes(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}EquipmentType/GetAllEquipmentTypes`)
      .pipe(map(result => result))
  }

  //Add Equipment Type
  AddEquipmentType(et: EquipmentType) {
    return this.httpClient.post(this.apiUrl + `EquipmentType/AddEquipmentType`, et);
  }


  //Delete a equipment type
  DeleteEquipmentType(equipmentType_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `EquipmentType/DeleteEquipmentType/${equipmentType_ID}`);
  }

  //Get Equipment Type by ID
  GetEquipmentType(equipmentType_ID: Number) {
    return this.httpClient.get(this.apiUrl + `EquipmentType/GetEquipmentType/${equipmentType_ID}`);
  }

  //Update a equipment Type
  updateEquipmentType(equipmentType_ID: Number, et: EquipmentType) {
    return this.httpClient.put(this.apiUrl + `EquipmentType/EditEquipmentType/${equipmentType_ID}`, et);
  }

  //Get equipment by text
  SearchEquipmentType(input: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}EquipmentType/GetEquipmentTypeInput/${input}`)
      .pipe(map(result => result))
  }

  //--------------------------------------------------------Faculty----------------------------------------
  //Get all the faculty
  GetAllFaculties(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Faculty/GetAllFaculty`)
      .pipe(map(result => result))
  }

  //Add Faculty
  AddFaculty(faculty: Faculty) {
    return this.httpClient.post(this.apiUrl + `Faculty/AddFaculty`, faculty);
  }

  //Update a faculty
  updateFaculty(faculty_ID: Number, fac: Faculty) {
    return this.httpClient.put(this.apiUrl + `Faculty/EditFaculty/${faculty_ID}`, fac);
  }

  //Get Faculty by ID
  GetFaculty(faculty_ID: Number) {
    return this.httpClient.get(this.apiUrl + `Faculty/GetFaculty/${faculty_ID}`);
  }

  //Delete a faculty
  DeleteFaculty(faculty_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `Faculty/DeleteFaculty/${faculty_ID}`);
  }

  //Get equipment by text
  SearchFaculty(input: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Faculty/GetFacultyInput/${input}`)
      .pipe(map(result => result))
  }

  //-------------------------------------------Department--------------------------------------------
  GetAllDepartments(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Department/GetDepartment`)
      .pipe(map(result => result))
  }

  //Add Department
  AddDepartment(dep: Department) {
    return this.httpClient.post(this.apiUrl + `Department/AddDepartment`, dep);
  }

  //Update a Department
  updateDepartment(department_ID: Number, dep: Department) {
    return this.httpClient.put(this.apiUrl + `Department/EditDepartment/${department_ID}`, dep);
  }

  //Get Department by ID
  GetDepart(department_ID: Number) {
    return this.httpClient.get(this.apiUrl + `Department/GetDepartment/${department_ID}`);
  }

  //Delete a Department
  DeleteDepartment(department_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `Department/DeleteDepartment/${department_ID}`);
  }

  //Get equipment by text
  SearchDepartment(input: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Department/GetDepartmentInput/${input}`)
      .pipe(map(result => result))
  }



  //-------------------------------------------Module--------------------------------------------
  GetAllModules(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Module/GetAllModules`)
      .pipe(map(result => result))
  }

  //Get module
  GetModules(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Module/GetAllModules`)
      .pipe(map(result => result))
  }

  //Add module
  AddModule(mod: Module) {
    return this.httpClient.post(this.apiUrl + `Module/AddModule`, mod);
  }

  //Update a module
  updateModule(module_ID: Number, mod: Module) {
    return this.httpClient.put(this.apiUrl + `Module/EditModule/${module_ID}`, mod);
  }

  //Get module by ID
  GetModule(module_ID: Number) {
    return this.httpClient.get(this.apiUrl + `Module/GetModule/${module_ID}`);
  }

  //Delete a module
  DeleteModule(module_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `Module/DeleteModule/${module_ID}`);
  }

  //Get equipment by text
  SearchModule(input: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Module/GetModuleInput/${input}`)
      .pipe(map(result => result))
  }

  //-------------------------------------------------------------------------Equipment-------------------------------------

  //Get all the equipments
  GetEquipments(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Equipment/GetAllEquipments`)
      .pipe(map(result => result))
  }

  //Get equipment using search bar
  searchEquipment(searchText: String): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Equipment/GetEquipment/${searchText}`).pipe(
      map(result => result)
    )
  }

  //Get equipment using id
  GetEquipmentByid(equipment_ID: Number) {
    return this.httpClient.get(this.apiUrl + `Equipment/GetEquipmentById/${equipment_ID}`);
  }
  //Update equipment and add new price
  EditEquipment(equipment_ID: Number, equipment: Equipment) {
    return this.httpClient.put(this.apiUrl + `Equipment/Editequipment/${equipment_ID}`, equipment);
  }

  //Delete equipment
  DeleteEquipment(equipment_ID: Number) {
    return this.httpClient.delete(this.apiUrl + `Equipment/DeleteEquipment/${equipment_ID}`)
  }

  AddEquipment(equi: Equipment) {
    return this.httpClient.post(this.apiUrl + 'Equipment/Addequipment', equi);
  }



  //------------------------------------------------------------------Books-------------------------------------
  GetBooks(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}BookInventory/GetBooks`)
      .pipe(map(result => result))
  }


  AddBookToCart(book: Book) {
    // Assuming you have a function to get book_id from the isbn, replace 'getBookIdFromIsbn' with the actual logic
    this.getBookIdFromIsbn(book.isbn).subscribe(
      (bookId: number) => {
        const itemToAdd = {
          shoppingCart_ID: 1, // Set shoppingCart_ID to 1
          book_ID: bookId,
          quantity: 1 // Assuming the default quantity is 1 for a new item
        };

        this.httpClient.post(`${this.apiUrl}ShoppingCart_Book/AddShoppingCart_Book`, itemToAdd)
          .subscribe(
            (response: any) => {
              console.log('Book added to cart successfully:', response);
              // You can perform additional actions if needed
            },
            (error: any) => {
              console.error('Error adding book to cart:', error);
              // You may want to handle the error here and show an error message to the user
            }
          );
      },
      (error: any) => {
        console.error('Error getting book_id from isbn:', error);
        // You may want to handle the error here and show an error message to the user
      }
    );
  }

  getBookIdFromIsbn(isbn: string): Observable<number> {
    // Call the API endpoint that retrieves the book_id based on the ISBN
    return this.httpClient.get<number>(`${this.apiUrl}getBookIdByIsbn/${isbn}`)
      .pipe(
        map((response: number) => {
          return response;
        })
      );
  }


  GetShoppingCartID(shoppingcart_ID: Number) {
    return this.httpClient.get(this.apiUrl + `ShoppingCart/GetShoppingCart/${shoppingcart_ID}`);
  }

  GetShoppingCartBook() {
    return this.httpClient.get(`${this.apiUrl}ShoppingCart_Book/GetAllShoppingCart_Books`)
      .pipe(map((result: any) => {
        let listBoks: ShoppingCartBook[] = [];
        result.forEach((element: any) => {
          let cartBook = new ShoppingCartBook();
          cartBook.shoppingCart_ID = element.shoppingCart_ID;
          cartBook.book_ID = element.book_ID;
          cartBook.quantity = element.quantity;
          listBoks.push(cartBook);
        });
        return listBoks;
      }));
  }

  UpdateBookCartItem(book_ID: number, shoppingCart_ID: number, quantity: number) {
    return this.httpClient.put(`${this.apiUrl}ShoppingCart_Book/EditQuantity/${book_ID}/${shoppingCart_ID}/${quantity}`, {});
  }  

  GetShoppingCartEquipment() {
    return this.httpClient.get(`${this.apiUrl}ShoppingCart_Equipment/GetAllShoppingCart_Equipments`)
      .pipe(map((result: any) => {
        let listEquips: ShoppingCartEquipment[] = [];
        result.forEach((element: any) => {
          let cartEquip = new ShoppingCartEquipment();
          cartEquip.shoppingCart_ID = element.shoppingCart_ID;
          cartEquip.equipment_ID = element.book_ID;
          cartEquip.quantity = element.quantity;
          listEquips.push(cartEquip);
        });
        return listEquips;
      }));
  }

  ClearCart(shoppingCart_ID: Number) {
    return this.httpClient.get(this.apiUrl + `ShoppingCart/ClearShoppingCart/${shoppingCart_ID}`);
  }

  //----------------------------------------HELP TIPS--------------------------------------------------
  GetAllTheHelpTips(): Observable<any> {
    return this.httpClient.get(this.apiUrl + `Help/GetAllHelpTips`).pipe( map( result => result) )
  }

  AddNewHelpTip(newHelpTip: FormData) {
    return this.httpClient.post(this.apiUrl + `Help/AddHelpTip`, newHelpTip);
  }

  GenerateVideoStreamLink(fileName: string): Observable<string> {
    return this.httpClient.get(this.apiUrl + `Help/GenerateBlobStreamLink/${fileName}`, { responseType: 'text' });
}

  UpdateAHelpTip(Help_ID: number, updatedHelpTip: FormData){
    return this.httpClient.put(this.apiUrl + `Help/EditHelpTip/${Help_ID}`, updatedHelpTip);
  }

  DeleteHelpTip( Help_ID: number){
    return this.httpClient.delete(this.apiUrl + `Help/DeleteHelpTip/${Help_ID}`);
  }

  GetSelectedHelpTip(Help_ID: number){
    return this.httpClient.get(this.apiUrl + `Help/GetAHelpTip/${Help_ID}`);
  }

  SearchHelpTips(enteredQuery: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Help/GetSearchedHelpTip/${enteredQuery}`).pipe( map( result => result));
  }
}
