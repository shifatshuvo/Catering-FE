import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { order } from '../interface/data-types';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css',
})
export class AdminOrdersComponent implements OnInit {
  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;

  orderList: undefined | order[];
  userOrderL: order[] | undefined;
  OrderMessage: undefined | string;
  userRole: 'ADMIN' | 'USER' | undefined;

  

  constructor(private orderService: AdminOrderService, private userService: UserService) {}

  ngOnInit(): void {
    this.checkUserRole();
    // console.log(this.userRole);
    
    // this.adminOrderList();
    // console.log(this.orderList);
    
    
    if (this.userRole === 'ADMIN') {
      this.adminOrderList();
    } 
    if (this.userRole === 'USER') {
      this.userOrderLst();
    }
    
  }

  deleteOrder(id: number) {
    console.log(id);
    this.orderService.deleteOrder(id).subscribe(() => {
          this.OrderMessage = 'Order is deleted';
          this.adminOrderList();
      });
    
      setTimeout(() => {
        this.OrderMessage = undefined;
      }, 2000);
  }

  deleteUserOrder(id: number) {
    console.log(id);
    this.orderService.deleteOrder(id).subscribe(() => {
          this.OrderMessage = 'Order is deleted';
          this.userOrderLst();
      });
    
      setTimeout(() => {
        this.OrderMessage = undefined;
      }, 1000);
  }


  adminOrderList() {
    this.orderService.list().subscribe((result) => {
      this.orderList = result;
    });
  }


  userOrderLst() {
    const user1 = localStorage.getItem("user");

    if (user1 !== null) {
      const LocalUser = JSON.parse(user1);
      const userId = LocalUser.id;

      this.userService.userOrderListById(userId).subscribe((result) => {
        this.userOrderL = result;
      })
    }

  }

  checkUserRole() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem("user");
    // console.log(token, user);
    

    if (user !== null) {
      const LocalUser = JSON.parse(user);
      const role = LocalUser.role;
      

      if (role === 'ADMIN' && token) {
        this.userRole = 'ADMIN';
  
      } else if (role === 'USER' && token) {
        this.userRole = 'USER';
  
      } else {
        this.userRole = undefined;
      }
    }
    
  }


}





























  // this.orderService.deleteOrder(id)
  //   this.OrderMessage = 'Order is Successfully created';
  //   this.oList();

  //   setTimeout(() => {
  //     this.OrderMessage = undefined;
  //   }, 2000);

  // this.orderService.deleteOrder(id).subscribe((result: any) => {
  //   if (result) {
  //     this.OrderMessage = 'Order is deleted';
  //     this.oList();
  //   }
  // });

  // setTimeout(() => {
  //   this.OrderMessage = undefined;
  // }, 3000);