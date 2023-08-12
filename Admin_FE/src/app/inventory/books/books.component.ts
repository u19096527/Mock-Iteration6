import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/shared/books';
import { Books } from 'src/app/shared/books';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  //cart: number = 0;
  bookList: Book[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar){}

  ngOnInit(): void { 
    this.GetAllBooks();
    console.log(this.bookList)
  }
  //Get All Book
  GetAllBooks() {
    this.data.GetBooks().subscribe(
      (result: Books) => {
        this.bookList = result.$values;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

}
