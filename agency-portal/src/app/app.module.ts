import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageOneComponent } from './main/page-one/page-one.component';
import { PageTwoComponent } from './main/page-two/page-two.component';
import { HomeComponent } from './main/home/home.component';
import { OptimumFormComponent } from './main/optimum-form/optimum-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    FooterComponent,
    PageOneComponent,
    PageTwoComponent,
    HomeComponent,
    OptimumFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OptimumComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
