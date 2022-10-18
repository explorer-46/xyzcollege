import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  rollno=""
  addno=""
  college=""
  dept=""
  blood=""
  dob=""
  address=""
  pname=""
  pemail=""
  gname=""
  status:boolean=false

  readValue=()=>{
    let data={
     "name":this.name,
      "rollno":this.rollno,
      "addno":this.addno,
      "college":this.college,
      "dept":this.dept,
      "blood":this.blood,
      "dob":this.dob,
      "address":this.address,
      "pname":this.pname,
      "pemail":this.pemail,
      "gname":this.gname
    }
    console.log(data)
    alert("Successfull")

  this.name=""
  this.rollno=""
  this.addno=""
  this.college=""
  this.dept=""
  this. blood=""
  this.dob=""
  this.address=""
  this.pname=""
  this.pemail=""
  this.gname=""
  this.status=true

  }








  


  ngOnInit(): void {
  }

}
