import { Component } from '@angular/core';

@Component({
  selector: 'app-help-tips',
  templateUrl: './help-tips.component.html',
  styleUrls: ['./help-tips.component.scss']
})
export class HelpTipsComponent {
  isIconFlipped: boolean = false;
  flipIcon() {
    this.isIconFlipped = !this.isIconFlipped;
  }
}
