import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prescribed-book-list',
  templateUrl: './prescribed-book-list.component.html',
  styleUrls: ['./prescribed-book-list.component.scss']
})
export class PrescribedBookListComponent {
  constructor(private dataService: DataService) { }

  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.uploadPrescribedBookList(file);
    }
  }

  private uploadPrescribedBookList(file: File): void {
    const formData = new FormData();
    formData.append('excelFile', file, file.name);

    this.dataService.uploadPrescribedBookList(formData)
      .subscribe(
        () => {
          console.log('Upload success!');
          alert('Prescribed book list uploaded successfully.');
        },
        (error) => {
          console.error('Upload error:', error);
          alert('Error occurred while uploading the file: ' + error.error);
        }
      );
  }

  uploadList(): void {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log('File to upload from button click:', file);
      this.uploadPrescribedBookList(file);
    } else {
      alert('No file selected.');
    }
  }
}
