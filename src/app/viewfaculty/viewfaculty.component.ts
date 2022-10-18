import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }

  status:boolean=true


  fData=[{"name":"Jose","phno":"9605702724","dept":"civil","doj":"11-07-2022"},{"name":"George","phno":"8305702724","dept":"civil","doj":"11-07-2022"},{"name":"Kumar","phno":"9633256840","dept":"Computer","doj":"11-07-2022"},{"name":"Rajan","phno":"9605702908","dept":"Mechanical","doj":"11-07-2022"}]

  ngOnInit(): void {
  }

}
