import { Component } from '@angular/core';
import { FoodService } from '../home.service';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/cart/cart.service';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() productItem: Food;
  foods: Food[] = [];
  constructor(private foodService: FoodService, private msg: CartService) {}

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }
}
