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
    new Food(1, 'pasta', 7, '../../assets/images/pasta.jpg'),
    new Food(2, 'burger', 10, '../../assets/images/Cheeseburger.jpg'),
    new Food(3, 'pizza', 12, '../../assets/images/Pepperoni-Pizza-1.jpg'),
    new Food(4, 'gyros', 5, '../../assets/images/Chicken-Gyros-1.jpg'),
  ];
  getAll() {
    return this.products;
  }
}
