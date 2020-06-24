import { Component, OnInit } from '@angular/core';
import { artikel } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	artikel = artikel;

  constructor() { }

  ngOnInit() {
  }

}
