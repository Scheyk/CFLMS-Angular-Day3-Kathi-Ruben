import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { artikels } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
	artikel;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }


  addToCart(artikel){
  	window.alert("Artikel wurde in deinen Warenkorb gelegt");
  	this.cartService.addToCart(artikel);
  }

  ngOnInit(): void {

  	this.route.paramMap.subscribe(i => {
   	this.artikel = artikels[+i.get('ID')];
  });
 }

}