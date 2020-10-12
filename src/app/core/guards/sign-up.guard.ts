import { Injectable } from '@angular/core';
import { 
  CanDeactivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';
import {SignUpComponent} from '../../auth/sign-up/sign-up.component'

@Injectable({
  providedIn: 'root'
})
export class SignUpGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(
    component: SignUpComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot)
    : Observable<boolean 
    | UrlTree> 
    | Promise<boolean 
    | UrlTree> 
    | boolean 
    | UrlTree {

      const isDirty = component.signupForm.dirty;

      if (isDirty) {
        return confirm('Bạn có chắc muốn rời khỏi trang này');
      }
  
      return true;
  }
  
}
