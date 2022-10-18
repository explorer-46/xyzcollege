import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';





const link:Routes=[
  {path:"",component:LoginComponent}
]
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
