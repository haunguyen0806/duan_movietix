import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim-sc',
  templateUrl: './item-phim-sc.component.html',
  styleUrls: ['./item-phim-sc.component.scss']
})
export class ItemPhimScComponent implements OnInit {
  @Input() PhimSC;
  constructor() { }

  ngOnInit(): void {
  }

}
