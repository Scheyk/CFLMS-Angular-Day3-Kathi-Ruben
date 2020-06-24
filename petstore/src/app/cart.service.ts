import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addToCart(product) {  //The addToCart() method appends a product to an array of items.
    this.items.push(product);
  }

  getItems() {  //The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
    return this.items;
  }

  clearCart() { // The clearCart() method returns an empty array of items.
    this.items = [];
    return this.items;
  }
}
