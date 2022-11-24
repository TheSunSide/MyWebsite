import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-mzvv33likg38va5h.us.auth0.com',
      clientId: 'wojPF7r6LvJy2mYJ3Nyd6WFnPecdTelI'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
