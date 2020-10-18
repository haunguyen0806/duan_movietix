import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService} from '../../core/services/auth.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  curentUser: any = {};

  updateUserForm:FormGroup
  constructor(private authService:AuthService) { 
    this.updateUserForm=new FormGroup({
      
    })
  }

  
  ngOnInit(): void {
    this.authService.initCurrentUser();
    this.authService.currentUser.subscribe({
      next: (result) => {
        // console.log(result);
        this.curentUser = result;
      },
    });
  }

  update(){
    
  }
}
