import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DetailMovieComponent } from "./detail-movie/detail-movie.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: HomeLayoutComponent },
      {
        path: "detail/:id",
        component: DetailMovieComponent
      },
    //   {
    //     path: "ticket-box/:id",
    //     loadChildren: "./ticket-box/ticket-box.module#TicketBoxModule"
    //   },
    //   {
    //     path: "form-pages",
    //     loadChildren: "./form-pages/form-pages.module#FormPagesModule"
    //   }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }