import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component'
import { BuyTicketModule } from './buy-ticket/buy-ticket.module';


@NgModule({
  declarations: [ DetailMovieComponent],
  imports: [
    CommonModule,
    BuyTicketModule
  ]
})
export class DetailMovieModule { }
