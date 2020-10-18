import { Component, OnInit } from '@angular/core';
import {RapService} from '../../../core/services/rap.service'
@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
danhSachRap: any;

  constructor(private rapService:RapService) { }

  ngOnInit(): void {
    this.rapService.layThongTinHeThongRap().subscribe({
      next: (res)=>{
        this.danhSachRap=res;
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  

}
