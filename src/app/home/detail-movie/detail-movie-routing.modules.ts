import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../home.component';
import { DetailMovieComponent } from './detail-movie.component';

const routes: Routes = [
    { path: "detail", component: DetailMovieComponent,children:[
        {
            path: 'detail', component: DetailMovieComponent, data: {title: 'Movie-detail'}
          }
    ] },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowingFilmDetailsRoutingModule { }