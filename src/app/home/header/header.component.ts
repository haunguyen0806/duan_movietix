import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  curentUser: any = {};

  constructor(private auth: AuthService, private router: Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/iconUser.jpg'));
  }


  ngOnInit(): void {
    this.auth.initCurrentUser();
    this.auth.currentUser.subscribe({
      next: (result) => {
        // console.log(result);
        this.curentUser = result;
      },
    });
  }
  lognOutUser() {
    localStorage.clear();
    location.reload();
  }
}
