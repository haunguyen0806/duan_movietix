import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  curentUser: any = {};

  constructor(private auth: AuthService, private router: Router) {}

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
