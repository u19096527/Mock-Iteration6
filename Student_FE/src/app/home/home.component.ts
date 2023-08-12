import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showProfile: boolean = true;

  constructor(private data: DataService) {}

  ngInOnIt(){
    this.useSharedFunction();
  }

  // Use the shared function
  useSharedFunction(): void {
    this.data.toggleProfile();
  }
}

