import { Component, OnInit } from '@angular/core';
import { artikels } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	artikels = artikels;

  constructor() { }

  ngOnInit() {
  }

}
