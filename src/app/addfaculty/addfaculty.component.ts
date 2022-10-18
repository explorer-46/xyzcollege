import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  name=""
  dept=""
  desig=""
  eduq=""
  dob=""
  address=""
  phno=""
  doj=""
  status:boolean=false

  vData=()=>{
    let data={
  "name":this.name,
  "dept":this.dept,
  "desig":this.desig,
  "eduq":this.eduq,
  "dob":this.dob,
  "address":this.address,
  "phno":this.phno,
  "doj":this.doj
    }
    alert("successful")
    console.log(data)

    this.name=""
    this.dept=""
    this.desig=""
    this.eduq=""
    this.dob=""
    this.address=""
    this.phno=""
    this.doj=""

    this.status=true
    
  }








  ngOnInit(): void {
  }

}
