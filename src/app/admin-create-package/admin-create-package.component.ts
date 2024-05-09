import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { Router } from '@angular/router';
import { pack } from '../interface/data-types';

@Component({
  selector: 'app-admin-create-package',
  templateUrl: './admin-create-package.component.html',
  styleUrl: './admin-create-package.component.css'
})
export class AdminCreatePackageComponent implements OnInit {

  createPackageMessage: string | undefined;
  backIcon = faArrowLeft;

  constructor(
    private orderService: AdminOrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createPackage(data: pack) {
    // console.log(data);
    this.orderService.createPackage(data).subscribe(() => {
      this.createPackageMessage = 'Package Created!!';

      setTimeout(() => {
        this.createPackageMessage = undefined;
        this.router.navigate(['/packages']);
      }, 2000);
    })

  }

}