import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from'@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';



import {MatSelectModule} from '@angular/material/select'; 
//import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerDashboardComponent } from './Components/seller/seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from './Components/Seller/add-product/add-product.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { SignUpComponent } from './Components/auth/signup/signup.component';
import { LogInComponent } from './Components/auth/login/login.component';
import {AuthInterceptor} from "./auth-interceptor";
import { CartComponent } from './Components/cart/cart.component';
import { UpdateProductComponent } from './Components/Seller/update-product/update-product.component';
import { ProductDetailComponent } from './Components/homepage/product-detail/product-detail.component';
import { NavbarComponent } from './Components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SellerDashboardComponent,
    AddProductComponent,
    HomepageComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    NavbarComponent,
  ],
  imports: [
   BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule ,
   
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
     NgbModule
  ], 
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
