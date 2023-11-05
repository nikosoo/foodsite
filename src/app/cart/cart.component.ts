import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  foods1: any = [];

  constructor(private msg: CartService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any) => {
      this.foods1 = product;
    });
  }
}
