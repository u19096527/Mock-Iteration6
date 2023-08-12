import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCart, ShoppingCartBook, ShoppingCartEquipment } from '../shared/shoppingcart';
import { Book, Books } from '../shared/books';
import { DataService } from '../services/data.service';
import { Equi, Equips } from '../shared/equipment2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCart_ID: number = 1;
  cart: number = 0;
  bookList: Book[] = []
  equipList: Equi[] = []
  shoppingCart1: ShoppingCart[] = [];
  shoppingCart: ShoppingCart | null = null;
  cartItemsBook: ShoppingCartBook[] = [];
  cartItemsEquipment: ShoppingCartEquipment[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.GetShoppingCart(3); // Fetch shopping cart with ID 1
    this.GetShoppingCartBook(); // Fetch shopping cart books with ID 1
    this.GetAllBooks();
    this.GetAllEquipments();
    this.GetShoppingCartEquipment();
    this.ClearCart(3)
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
      this.cartItemsBook = result.filter((item) => item.shoppingCart_ID === 3);
    });
  }

  GetShoppingCartEquipment() {
    this.data.GetShoppingCartEquipment().subscribe((result) => {
      // Filter the items with shoppingCart_ID equal to 1
      this.cartItemsEquipment = result.filter((item) => item.shoppingCart_ID === 3);
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

  GetAllEquipments() {
    this.data.GetEquipments().subscribe(
      (result: Equips) => {
        this.equipList = result.$values;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }


  ClearCart(shoppingCart_ID: number) {
    this.data.ClearCart(shoppingCart_ID).subscribe(
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

  calculateItemTotal(shoppingCartItem: any, book: any): number {
    const quantity = shoppingCartItem.quantity;
    const pricePerItem = book.price;
    return quantity * pricePerItem;
  }
  
}
