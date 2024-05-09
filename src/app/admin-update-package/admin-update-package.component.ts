import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pack } from '../interface/data-types';

@Component({
  selector: 'app-admin-update-package',
  templateUrl: './admin-update-package.component.html',
  styleUrl: './admin-update-package.component.css'
})
export class AdminUpdatePackageComponent implements OnInit {

  backIcon = faArrowLeft;
  packageData: undefined | pack;
  selectedPackageId: number | undefined;
  updatePackageMessage: string | undefined;

  constructor(private route: ActivatedRoute, private orderService: AdminOrderService, private router: Router) {}

  ngOnInit(): void {
    let packageId = this.route.snapshot.paramMap.get('id');
    packageId && this.orderService.getPackage(packageId).subscribe((data) => {
      this.packageData = data;

      this.selectedPackageId = this.packageData.id;
    });
  }


  updateOrders(uData: any) {
    const id = this.selectedPackageId;
    const data = { id,...uData}
    

    this.orderService.updatePackage(data).subscribe(() => {
      this.updatePackageMessage = 'Package is Successfully Updated';

      setTimeout(() => {
        this.updatePackageMessage = undefined;
        this.router.navigate(['/packages']);
      }, 2000);
    });
  }

}
