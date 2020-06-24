import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.sass']
})

export class WarenkorbComponent implements OnInit {
	items;
	pay;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

  	this.pay = this.formBuilder.group({
  		name: '',
  		address: ''
  	});
  }

  ngOnInit(): void {
  	this.items = this.cartService.getItems();
  }

  onSubmit(costumerData) {
  	console.warn('Your order is submited', costumerData);

  	this.items = this.cartService.clearCart();
  	this.pay.reset();
  }

}
