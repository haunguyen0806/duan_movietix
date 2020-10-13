import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { ReviewComponent } from './review/review.component';
import { ShowtimeInDetailComponent } from './showtime-in-detail/showtime-in-detail.component';
import { BuyTicketComponent } from './buy-ticket.component'


@NgModule({
  declarations: [InfoComponent, ReviewComponent, ShowtimeInDetailComponent, BuyTicketComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InfoComponent, ReviewComponent, ShowtimeInDetailComponent, BuyTicketComponent
  ]
})
export class BuyTicketModule { }
