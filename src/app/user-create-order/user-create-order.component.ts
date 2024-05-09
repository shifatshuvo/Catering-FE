import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { odr, pack } from '../interface/data-types';
import { UserService } from '../services/user-service/user.service';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create-order',
  templateUrl: './user-create-order.component.html',
  styleUrl: './user-create-order.component.css'
})
export class UserCreateOrderComponent implements OnInit {


  pkgList: pack[] | undefined;
  backIcon = faArrowLeft;
  createOrderMessage: string | undefined;


  constructor(private userService: UserService, private adminService: AdminOrderService, private router: Router) {}

  ngOnInit(): void {
    this.packList();
  }

    packList() {
    this.adminService.packageList().subscribe((res: pack[] | undefined) => {
      // console.log(result);
      this.pkgList = res;
    })
  }
  
  
  createUserOrder(data: odr) {
    
    const user = localStorage.getItem("user");

    if (user !== null) {
      const LocalUser = JSON.parse(user);
      const userId = LocalUser.id;
      const orderData = {...data, userId};

      this.userService.createOrder(orderData).subscribe(() => {
        this.createOrderMessage = 'Order is Successfully Created';

        setTimeout(() => {
          this.createOrderMessage = undefined;
          this.router.navigate(['/admin/orders']);
        }, 1000);
      })
    }



  }


  @Output() packageSelected = new EventEmitter<any>();
  selectedPackage: any;
  
}
