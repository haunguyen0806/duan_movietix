import { Component, OnInit } from '@angular/core';
import { Theater } from '../../../core/models/theater';
import { TheaterService } from '../../../core/services/theater.service'
@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  danhSachRap: Theater[];
  loading: boolean = true;
  error: boolean = false;
  constructor(private theaterService: TheaterService) { }

  ngOnInit(): void {
    this.loading = true;

    this.theaterService.layDanhSachRap().subscribe({
      next: (listTheater) => {
        console.log(listTheater);
        this.loading = false;
        this.danhSachRap = listTheater ;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
      complete: () => {

      }
    });
  }

}
