import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { odr, pack, user } from '../interface/data-types';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-orders',
  templateUrl: './admin-create-orders.component.html',
  styleUrl: './admin-create-orders.component.css',
})
export class AdminCreateOrdersComponent implements OnInit {
  createOrderMessage: string | undefined;
  userList: undefined | user[];
  pkgList: pack[] | undefined;
  backIcon = faArrowLeft;

  constructor(
    private orderService: AdminOrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.uList();
    this.packList();
  }

  createOrders(data: odr) {
    console.log(data);
    
    
    this.orderService.create(data).subscribe(() => {
      this.createOrderMessage = 'Order is Successfully Created';

      setTimeout(() => {
        this.createOrderMessage = undefined;
        this.router.navigate(['/admin/orders']);
      }, 2000);
    });
  }

  uList() {
    this.orderService.uList().subscribe((result: user[] | undefined) => {
      // console.log(result);
      this.userList = result;
    });
  }

  packList() {
    this.orderService.packageList().subscribe((res: pack[] | undefined) => {
      // console.log(result);
      this.pkgList = res;
    })
  }


  @Output() userSelected = new EventEmitter<any>();
  selectedUser: any;
  
  @Output() packageSelected = new EventEmitter<any>();
  selectedPackage: any;

}
