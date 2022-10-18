import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }


  getData=[{"name":"Arjun Raju","rollno":"123","college":"BPC college Piravom","dob":"18-06-2001"},{"name":"Amal","rollno":"124","college":"BPC college Piravom","dob":"20-06-2001"},{"name":"Anandhu","rollno":"125","college":"BPC college Piravom","dob":"01-06-2001"},{"name":"Akshay","rollno":"127","college":"BPC college Piravom","dob":"18-10-2001"}]

  ngOnInit(): void {
  }

}
