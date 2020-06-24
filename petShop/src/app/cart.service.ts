import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
	items = []; //wird dann warenkorb befüllt

  constructor() { }

 addToCart(artikel) {
   this.items.push(artikel);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}
