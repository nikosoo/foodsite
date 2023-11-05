import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  // product: Food[] = [
  //   {
  //     id: 1,
  //     name: 'pasta',
  //     price: 7,
  //     imageUrl: '../../assets/images/pasta.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'burger',
  //     price: 10,
  //     imageUrl: '../../assets/images/Cheeseburger.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'pizza',
  //     price: 12,
  //     imageUrl: '../../assets/images/Pepperoni-Pizza-1.jpg',
  //   },
  //   {
  //     id: 4,
  //     name: 'gyros',
  //     price: 5,
  //     imageUrl: '../../assets/images/Chicken-Gyros-1.jpg',
  //   },
  // ];

  products: Food[] = [
    new Food(1, 'Pasta', 7, '../../assets/images/pasta.jpg', 4.2),
    new Food(2, 'Burger', 10, '../../assets/images/Cheeseburger.jpg', 4.8),
    new Food(3, 'Pizza', 12, '../../assets/images/Pepperoni-Pizza-1.jpg', 3.9),
    new Food(4, 'Gyros', 5, '../../assets/images/Chicken-Gyros-1.jpg', 4.1),
  ];
  getAll() {
    return this.products;
  }
}
