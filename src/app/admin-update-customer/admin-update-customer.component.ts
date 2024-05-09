import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../interface/data-types';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrl: './admin-update-customer.component.css'
})
export class AdminUpdateCustomerComponent implements OnInit {


  backIcon = faArrowLeft;
  customerData: user | undefined;
  selectedCustomerId: number | undefined;
  updateCustomerMessage: string | undefined;

  constructor(private route: ActivatedRoute, private orderService: AdminOrderService, private router: Router) {}

  ngOnInit(): void {
    let customerId = this.route.snapshot.paramMap.get('id');
    customerId && this.orderService.getCustomer(customerId).subscribe((data) => {
      this.customerData = data;

      this.selectedCustomerId = this.customerData.id;
    });
  }


  updateCustomer(uData: any) {
    const id = this.selectedCustomerId;
    const data = { id,...uData};
    console.log(data);
    

    this.orderService.updateCustomer(data).subscribe(() => {
      this.updateCustomerMessage = 'customer Updated';

      setTimeout(() => {
        this.updateCustomerMessage = undefined;
        this.router.navigate(['/customers']);
      }, 2000);
    });
  }
}
