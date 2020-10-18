import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../../core/models/movies';
import { PhimService } from '../../../../core/services/phim.service'

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  danhSachPhim: Movie[];
  loading: boolean = true;
  error: boolean = false;
  slideConfig = {dots: false};
  // moviesPerSlide = 8;

  constructor(private moviesService: PhimService) {}
  
  ngOnInit(): void {
    this.loading = true;

    this.moviesService.layDanhSachPhim().subscribe({
      next: (listPhim) => {
        this.loading = false;
        this.danhSachPhim = listPhim ;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
      complete: () => {

      }
    });

    // this.moviesService.movieList.subscribe({
    //   next: (result) => {
    //     this.danhSachPhim = result;
    //   },
    // });
  }
}