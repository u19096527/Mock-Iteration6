import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true
  togglePassword(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
  }

  cart: number = 5;
}
