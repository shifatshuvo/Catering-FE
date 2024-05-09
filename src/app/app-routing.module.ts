import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { PackagesComponent } from './packages/packages.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { UpdateAdminOrdersComponent } from './update-admin-orders/update-admin-orders.component';
import { AdminCreateOrdersComponent } from './admin-create-orders/admin-create-orders.component';
import { AdminCreatePackageComponent } from './admin-create-package/admin-create-package.component';
import { AdminUpdatePackageComponent } from './admin-update-package/admin-update-package.component';
import { AdminUpdateCustomerComponent } from './admin-update-customer/admin-update-customer.component';
import { AdminCreateCustomerComponent } from './admin-create-customer/admin-create-customer.component';
import { UserCreateOrderComponent } from './user-create-order/user-create-order.component';
import { UserUpdateOrderComponent } from './user-update-order/user-update-order.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin/orders'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent
  },
  {
    path: 'admin/orders/create',
    component: AdminCreateOrdersComponent
  },
  {
    path: 'admin/update-order/:id',
    component: UpdateAdminOrdersComponent
  },
  {
    path: 'orders/create',
    component: UserCreateOrderComponent
  },
  {
    path: 'order/update-order/:id',
    component: UserUpdateOrderComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'admin/packages/create',
    component: AdminCreatePackageComponent
  },
  {
    path: 'admin/packages/update/:id',
    component: AdminUpdatePackageComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'admin/customer/create',
    component: AdminCreateCustomerComponent
  },
  {
    path: 'admin/customers/update/:id',
    component: AdminUpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
