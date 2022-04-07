import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { BodyComponent } from './home-page/body/body.component';
import { CardComponent } from './home-page/body/card/card.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './login-page/signup/signup.component';
import { PokemonApiService } from './pokemon-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    CardComponent,
    LoginPageComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
