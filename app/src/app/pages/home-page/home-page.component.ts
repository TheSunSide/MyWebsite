import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService ) {
    console.log('tests');
  }
  async connect() {
    this.auth.loginWithPopup({});
  }
}
