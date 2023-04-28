import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formValue!: Subscription;
  
  orderForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
    paymentMethod: new FormControl(''),
    order: new FormGroup({
      itemName: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl('')
    })

    
  });


}
