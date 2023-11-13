import { Component, Input } from '@angular/core';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onClick() {
    alert('Your form has been submitted successfully');
    location.reload();
  }
}
