import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss']
})
export class BuyTicketComponent implements OnInit {

  @Input() revArr;
  constructor() { }

  ngOnInit() {
  }

  isChanged: string = 'st';
  isActivated: string = 'st';
  
  changeTab(tabId){
    this.isChanged = tabId;
    this.isActivated = tabId;
    window.scrollTo({
      top: 450,
      behavior: 'smooth'
    })
  }

}
