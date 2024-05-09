import { Component } from '@angular/core';
import {faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'
import { AdminOrderService } from '../services/admin-service/admin-order.service';
import { pack } from '../interface/data-types';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {


  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;

  pList: undefined | pack[];
  packageMessage: undefined | string;

  constructor(private orderService: AdminOrderService) {}

  ngOnInit(): void {
    this.packList();
  }

  deletePackage(id: number) {
    console.log(id);
    this.orderService.deletePackage(id).subscribe(() => {
          this.packageMessage = 'Package is deleted';
          this.packList();
      });
    
      setTimeout(() => {
        this.packageMessage = undefined;
      }, 2000);
  }


  packList() {
    this.orderService.packageList().subscribe((result) => {
      // console.log(result);
      this.pList = result;
    });
  }
}
