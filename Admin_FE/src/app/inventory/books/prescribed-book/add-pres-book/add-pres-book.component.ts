import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PrescribedBook } from 'src/app/shared/prescribedbook';
import { Module } from 'src/app/shared/module';

@Component({
  selector: 'app-add-pres-book',
  templateUrl: './add-pres-book.component.html',
  styleUrls: ['./add-pres-book.component.scss']
})
export class AddPresBookComponent implements OnInit {
  modules: Module[] = [];
  prescribedBook: PrescribedBook = {
    isbn: '',
    title: '',
    publisherName: '',
    authorName: '',
    edition: 0,
    year: 0,
    basePrice: 0,
    module_ID: 0
  };
  selectedModuleCode: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getAllModules();
  }

  getAllModules(): void {
    this.dataService.GetAllModules().subscribe(
      (modules) => {
        this.modules = modules;
      },
      (error) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

  moduleChanged(): void {
    this.selectedModuleCode = this.getModuleCode(this.prescribedBook.module_ID);
  }
  

  getModuleCode(module_ID: number): string {
    const module = this.modules.find((m) => m.module_ID === module_ID);
    return module ? module.module_Code.toString() : 'N/A';
  }
  // Function to add a prescribed book
  addPrescribedBook() {
    this.dataService.addPrescribedBook(this.prescribedBook).subscribe(
      (response) => {
        // Success handling here
        console.log('Prescribed book added successfully.');
        // Redirect to the desired page after successful addition
        this.router.navigate(['/prescribed-book']);
      },
      (error) => {
        // Error handling here
        console.error('Error adding prescribed book:', error);
      }
    );
  }
  
}
