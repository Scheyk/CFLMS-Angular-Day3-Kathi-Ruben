import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  /*
  ActivatedRoute : provides access to information about a route associated with a component that is loaded in an outlet.
  Used to traverse the RouterState tree and extract information from nodes), 
  The ActivatedRoute is specific to each routed component that the Angular Router loads. 
  It contains information about the route, its parameters, and additional data associated with the route.
  By injecting the ActivatedRoute, we are configuring the component to use a service.
 */
  
  addToCart(product) {  // receives the product - by using the addToCart method from cartservices.ts
    window.alert('Your product has been added to the cart!');  // message to display when product added
    this.cartService.addToCart(product);
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}

/*Then in ngOnInit() we added some lines. 
The route parameters correspond to the path variables we define in the route. 
The URL that matches the route provides the productId. 
Angular uses the productId to display the details for each unique product.
*/