import { OrderLine } from "./orderline";

export class ShoppingCart {
  $id: string = "";
  shoppingCart: {
    $id: string;
    shoppingCart_ID: number;
    student_ID: number;
    student: any; // Replace 'any' with the actual type for Student if available
    date: string;
    subTotal: number;
    shoppingCartBook: ShoppingCartBook;
    shoppingCartEquipment: ShoppingCartEquipment;
    orderLine: OrderLine | null;
  } = {
      $id: "",
      shoppingCart_ID: 0,
      student_ID: 0,
      student: null,
      date: "",
      subTotal: 0,
      shoppingCartBook: new ShoppingCartBook(), // Create an instance of ShoppingCartBook
      shoppingCartEquipment: new ShoppingCartEquipment(), // Create an instance of ShoppingCartEquipment
      orderLine: null,
    };
  subTotal: number = 0;
}

export class ShoppingCartBook {
  shoppingCart_ID: number = 0;
  book_ID: number = 0;
  quantity: number = 0;
}

export class ShoppingCartEquipment {
  shoppingCart_ID: number = 0;
  equipment_ID: number = 0;
  quantity: number = 0;
}