import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { order, pack, user } from '../interface/data-types';

@Component({
  selector: 'app-update-admin-orders',
  templateUrl: './update-admin-orders.component.html',
  styleUrl: './update-admin-orders.component.css'
})
export class UpdateAdminOrdersComponent implements OnInit {

  backIcon = faArrowLeft;
  orderData: undefined | order;
  userList: user[] | undefined;
  pkgList: pack[] | undefined;
  selectedPackage: number | undefined;
  selectedUser: number | undefined;
  selectedOrderId: number | undefined;
  updateOrderMessage: string | undefined;

  constructor(private route: ActivatedRoute, private orderService: AdminOrderService, private router: Router) {}

  ngOnInit(): void {
    let orderId = this.route.snapshot.paramMap.get('id');
    orderId && this.orderService.getOrder(orderId).subscribe((data) => {
      this.orderData = data;

      this.selectedOrderId = this.orderData.id;
      this.selectedPackage = this.orderData?.package?.id;
      this.selectedUser = this.orderData?.user?.id;
    });
    
    this.usrList();
    this.packList();
  }


  updateOrders(uData: any) {
    const orderId = this.selectedOrderId;
    const data = { orderId,...uData}

    this.orderService.updateOrder(data).subscribe(() => {
      this.updateOrderMessage = 'Order is Successfully Updated';

      setTimeout(() => {
        this.updateOrderMessage = undefined;
        this.router.navigate(['/admin/orders']);
      }, 2000);
    });
  }

  packList() {
    this.orderService.packageList().subscribe((result: pack[] | undefined) => {
      this.pkgList = result;
    })
  }

  usrList() {
    this.orderService.uList().subscribe((result: user[] | undefined) => {
      this.userList = result;
    })
  }


  // Function to handle selection change
  onUserChange(event: any) {
    this.selectedUser = event;
  }

  // Function to handle selection change
  onPackageChange(event: any) {
    this.selectedPackage = event;
  }

  
}











  // usList() {
  //    this.order.uList.subscribe((result: user[] | undefined) => {
  //     console.log(result);
  //     this.userList = result;
  //   });
  // }



    // onPackageChange(event: any) {
  //   if (event !== this.selectedPackage) {
  //     // Store the previous selection
  //     this.previousPackage = this.selectedPackage;
  //     this.selectedPackage = event;
  //   }
  // }

  // @Output() packageSelected = new EventEmitter<any>();
  // selectedPackage: any;
  // this.selectedPackage = 

    // @Output() userSelected = new EventEmitter<any>();
  // selectedUser: any;