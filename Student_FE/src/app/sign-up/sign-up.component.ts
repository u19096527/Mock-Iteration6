import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  cart: number = 5;
  //Code to hide and show entered password
  hide = true
  show = true
  togglePassword(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
  }

  toggleConfirmPassword(event: Event) {
    event.preventDefault();
    this.show = !this.show;
  }
  
}
