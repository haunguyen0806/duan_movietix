import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userAdminForm:FormGroup
  constructor() { 
    this.userAdminForm=new FormGroup({
      
    })
  }

  ngOnInit(): void {
  }

}
