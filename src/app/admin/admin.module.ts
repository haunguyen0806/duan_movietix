import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent, data: { title: 'Users' } },
      { path: 'movies', component: MoviesComponent, data: { title: 'Movies' } },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent, 
    MoviesComponent, 
    AddMovieComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    ReactiveFormsModule,
    FormsModule
],
})
export class AdminModule { }
