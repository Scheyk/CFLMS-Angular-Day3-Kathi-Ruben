import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';


/* Configure the component to use the cart service, so we need to import the CartService 
from the cart.service.ts file, then the same steps as before we need to inject the CartService 
so that the cart component can use it.
Same for FormBuilder - from app modules.ts
*/


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor( 
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { 
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });      
    }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  /*define an onSubmit() method to process the form. We will use the CartService clearCart() method to
  empty the cart items and reset the form after its submission.
  */
  onSubmit(customerData) {
    //Process checkout Data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}


/*Define the items property to store the products in the cart, and then set the items using the cart’s service's getItems() method. 
Recall that we defined this method when we generated the cart.service.ts.
Same for Form Builder
*/