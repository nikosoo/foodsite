import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from './home.service';
import { Food } from '../shared/models/food';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private msg: CartService) {}
  ngOnInit() {
    this.foods = this.foodService.getAll();
  }

  handleAddToCart() {
    this.msg.sendMsg(this.foods);
  }
}
