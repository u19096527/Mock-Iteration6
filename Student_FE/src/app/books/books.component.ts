import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Book, Books } from '../shared/books';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  //cart: number = 0;
  bookList: Book[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar){}

  ngOnInit(): void { 
    this.GetAllBooks();
    console.log(this.bookList)
  }

  //Code for the drop down
  isIconFlipped: boolean = false;
  flipIcon() {
    this.isIconFlipped = !this.isIconFlipped;
  }


  //Get All Book
  GetAllBooks() {
    this.data.GetBooks().subscribe(
      (result: Books) => {
        this.bookList = result.$values;
      },
      (error: any) => {
        console.error('Error fetching books:', error);
      }
    );
  }


}
