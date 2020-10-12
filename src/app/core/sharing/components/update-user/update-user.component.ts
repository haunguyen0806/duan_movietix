import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
 
  updateUserForm:FormGroup

  constructor() {
    this.updateUserForm=new FormGroup({
      
    })
   }

  ngOnInit(): void {
  }

  update(){
    
  }
}
