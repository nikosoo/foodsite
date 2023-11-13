import { Component, EventEmitter, OnInit } from '@angular/core';
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
export class ProductListComponent implements OnInit {
  @Input() foods: Food[] = [];
  @Input() searchText: any;
  @Input() productItem: Food;
  @Output() newItemEvent = new EventEmitter<Food>();

  constructor(private foodService: FoodService, private msg: CartService) {}

  handleAddToCart() {
    this.newItemEvent.emit(this.productItem);
  }

  ngOnInit(): void {}
}
