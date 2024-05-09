import { Component, OnInit } from '@angular/core';
import {faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'
import { user } from '../interface/data-types';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {


  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;

  cList: undefined | user[];
  customerMessage: undefined | string;

  constructor(private orderService: AdminOrderService, private router: Router) {}

  ngOnInit(): void {
    this.customerList();
  }

  deleteCustomer(id: number) {
    console.log(id);
    this.orderService.deleteCustomer(id).subscribe(() => {
          this.customerMessage = 'Customer is deleted';
          this.customerList();
      });
    
      setTimeout(() => {
        this.customerMessage = undefined;
        this.router.navigate(['/customers']);
      }, 2000);
  }


  customerList() {
    this.orderService.uList().subscribe((result) => {
      // console.log(result);
      this.cList = result;
    });
  }
}
