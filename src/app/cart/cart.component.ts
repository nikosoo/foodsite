import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Food } from '../services/food';

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

  orderButton() {
    alert('Your order has been placed');
    location.reload();
  }

  getTotalPrice(): number {
    return this.foods1.reduce((total: any, item: any) => {
      if (!isNaN(item.price)) {
        return total + Number(item.price); // Convert to number explicitly if needed
      } else {
        return total; // Skip adding this price to the total
      }
    }, 0);
  }
}
