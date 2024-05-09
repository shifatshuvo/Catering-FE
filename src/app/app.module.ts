import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    CustomersComponent,
    PackagesComponent,
    AdminOrdersComponent,
    UpdateAdminOrdersComponent,
    AdminCreateOrdersComponent,
    AdminCreatePackageComponent,
    AdminUpdatePackageComponent,
    AdminUpdateCustomerComponent,
    AdminCreateCustomerComponent,
    UserCreateOrderComponent,
    UserUpdateOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
