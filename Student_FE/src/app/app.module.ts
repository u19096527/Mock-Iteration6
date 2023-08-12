import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { HelpTipsComponent } from './help-tips/help-tips.component';
import { BooksComponent } from './books/books.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckBookEstimateComponent } from './resell/check-book-estimate/check-book-estimate.component';
import { ViewResaleDetailsComponent } from './resell/view-resale-details/view-resale-details.component';
import { ScheduleBookEvalComponent } from './resell/schedule-book-eval/schedule-book-eval.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './profile/account-details/change-password/change-password.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './profile/order/order.component';
import { AccountDetailsComponent } from './profile/account-details/account-details.component';
import { DeleteAccountComponent } from './profile/delete-account/delete-account.component';
import { ViewOrderComponent } from './profile/order/view-order/view-order.component';
import { UpdateAccountComponent } from './profile/account-details/update-account/update-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    HelpTipsComponent,
    EquipmentComponent,
    AboutUsComponent,
    BooksComponent,
    CheckBookEstimateComponent,
    ViewResaleDetailsComponent,
    ScheduleBookEvalComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    CheckOutComponent,
    ProfileComponent,
    OrderComponent,
    AccountDetailsComponent,
    DeleteAccountComponent,
    ViewOrderComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
