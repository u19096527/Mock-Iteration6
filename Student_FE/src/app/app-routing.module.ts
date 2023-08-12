import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HelpTipsComponent } from './help-tips/help-tips.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckBookEstimateComponent } from './resell/check-book-estimate/check-book-estimate.component';
import { ScheduleBookEvalComponent } from './resell/schedule-book-eval/schedule-book-eval.component';
import { ViewResaleDetailsComponent } from './resell/view-resale-details/view-resale-details.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './profile/order/order.component';
import { AccountDetailsComponent } from './profile/account-details/account-details.component';
import { ChangePasswordComponent } from './profile/account-details/change-password/change-password.component';
import { DeleteAccountComponent } from './profile/delete-account/delete-account.component';
import { ViewOrderComponent } from './profile/order/view-order/view-order.component';
import { UpdateAccountComponent } from './profile/account-details/update-account/update-account.component';


const routes: Routes = [
  
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register',component: SignUpComponent},
  {path: 'Help',component: HelpTipsComponent},
  {path: 'Cart',component: CartComponent},
  {path: 'Books', component: BooksComponent},
  {path: 'Equipment', component: EquipmentComponent},
  {path: 'About', component: AboutUsComponent},
  {path: 'Check', component: CheckBookEstimateComponent},
  {path: 'Schedule', component: ScheduleBookEvalComponent},
  {path: 'View-Resale', component: ViewResaleDetailsComponent},
  {path: 'Forgot-Password', component: ForgotPasswordComponent},
  {path: 'Change-Password', component: ChangePasswordComponent},
  {path: 'Check-Out', component: CheckOutComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Order', component: OrderComponent},
  {path: 'Account-Info', component: AccountDetailsComponent},
  {path: 'Delete-Account', component: DeleteAccountComponent},
  {path: 'Update-Account', component: UpdateAccountComponent},
  {path: 'View-Order', component: ViewOrderComponent},
  {path: '', redirectTo: '/Home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }