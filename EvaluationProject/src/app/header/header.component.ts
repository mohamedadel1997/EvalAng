import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(

  ) {}

  ngOnInit() {

  }

  onSaveData() {
  }

  onFetchData() {
  }

  onLogout() {
  }

  ngOnDestroy() {
  }
}
