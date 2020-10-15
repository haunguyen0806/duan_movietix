import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

import { HomeLayoutModule } from './home-layout/home-layout.module';
import { DetailMovieModule } from './detail-movie/detail-movie.module';

import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from '../core/material/material.module'

 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', component: HomeLayoutComponent, data: { title: 'Home' }
      },
      {
        path: 'detail/:id', component: DetailMovieComponent, data: {title: 'Movie-detail'}
      }
    ]
  }
]

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    DetailMovieModule ,
    HomeLayoutModule,
    MaterialModule,
    
  ]
})
export class HomeModule { }
