import { Component } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  backIcon = faArrowLeft;

  updateCustomer(data: any) {
    console.log(data);
    
  }
}
