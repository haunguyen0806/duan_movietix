import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { HomeLayoutModule } from './home-layout/home-layout.module';
import { RouterModule, Routes } from '@angular/router'
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', component:HomeLayoutComponent, data: { title: 'Home' }
      },
      {
        path: 'detail', component: DetailMovieComponent, data: {title: 'Movie-detail'}
      }
    ]
  }
]

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, HomeComponent,DetailMovieComponent],
  imports: [
    CommonModule,
    HomeLayoutModule,
    RouterModule.forChild(routes),
    RouterModule,
    
  ],
  exports: [
    HeaderComponent, FooterComponent, HomeComponent,DetailMovieComponent
  ]
})
export class HomeModule { }
