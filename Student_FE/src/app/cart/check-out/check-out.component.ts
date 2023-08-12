import { Component, OnInit } from '@angular/core';
import { ShoppingCart, ShoppingCartBook, ShoppingCartEquipment } from 'src/app/shared/shoppingcart';
import { Book, Books } from 'src/app/shared/books';
import { DataService } from 'src/app/services/data.service';
import { Equi } from 'src/app/shared/equipment2';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  cart: number = 0;
  bookList: Book[] = []
  equipList: Equi[] = []
  shoppingCart1: ShoppingCart[] = [];
  shoppingCart: ShoppingCart | null = null;
  cartItemsBook: ShoppingCartBook[] = [];
  cartItemsEquipment: ShoppingCartEquipment[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.GetShoppingCart(1); // Fetch shopping cart with ID 1
    this.GetShoppingCartBook(); // Fetch shopping cart books with ID 1
    this.GetAllBooks();
    this.GetShoppingCartBook();
  }

  // Get ShoppingCart
  GetShoppingCart(shoppingCart_ID: number) {
    this.data.GetShoppingCartID(shoppingCart_ID).subscribe(
      (response: any) => {
        // Assuming the API response is an object representing the shopping cart
        this.shoppingCart = response; // Save the shopping cart data to the property
        console.log(this.shoppingCart); // Log the shopping cart data after it's fetched
      },
      (error: any) => {
        console.error('Error fetching shopping cart:', error);
        // You may want to handle the error here and show an error message to the user
      }
    );
  }

  GetShoppingCartBook() {
    this.data.GetShoppingCartBook().subscribe((result) => {
      // Filter the items with shoppingCart_ID equal to 1
      this.cartItemsBook = result.filter((item) => item.shoppingCart_ID === 1);
    });
  }

  GetShoppingCartEquipment() {
    this.data.GetShoppingCartEquipment().subscribe((result) => {
      // Filter the items with shoppingCart_ID equal to 1
      this.cartItemsEquipment = result.filter((item) => item.shoppingCart_ID === 1);
    });
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
