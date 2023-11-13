import { Component, Input, OnInit, Output } from '@angular/core';
import { Food } from '../shared/models/food';
import { FoodService } from './home.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchText: any;
  productItem: Food;
  foods: Food[] = [];
  cartItems: any = [];

  constructor(private foodService: FoodService, private msg: CartService) {}

  ngOnInit() {
    this.foods = this.foodService.getAll();
  }

  onFunctionName(event: any) {
    this.cartItems.push(event);
    this.msg.sendMsg(this.cartItems);
  }
}
