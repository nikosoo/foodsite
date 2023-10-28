import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  subject = new BehaviorSubject('');

  sendMsg(product: any) {
    console.log(product);
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
