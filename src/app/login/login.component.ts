import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private my:Router) { }

  username=""
  password=""

  value=()=>{

    if (this.username=="Admin" && this.password=="1234") {
      this.my.navigate(["/dash"])
      
    } else {
      alert("invalid password")
      
    }
   console.log()

  }



  ngOnInit(): void {
  }

}
