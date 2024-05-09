import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { Router } from '@angular/router';
import { user } from '../interface/data-types';

@Component({
  selector: 'app-admin-create-customer',
  templateUrl: './admin-create-customer.component.html',
  styleUrl: './admin-create-customer.component.css'
})
export class AdminCreateCustomerComponent implements OnInit {


  createCustomerMessage: string | undefined;
  backIcon = faArrowLeft;

  constructor(
    private orderService: AdminOrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createCustomer(data: user) {
    // console.log(data);
    this.orderService.createCustomer(data).subscribe(() => {
      this.createCustomerMessage = 'Customer Created!!';

      setTimeout(() => {
        this.createCustomerMessage = undefined;
        this.router.navigate(['/customers']);
      }, 2000);
    })

  }
}
