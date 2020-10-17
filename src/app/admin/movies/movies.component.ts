import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/core/services/phim.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  danhSachPhim: any[];
  totalPages: number = 0;
  currentPage: number = 1;
  pageCount: number = 5;
  constructor(
    private phimService: PhimService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.currentPage = parseInt(params.page) || 1;

        this.phimService
          .layDanhSachPhimPhanTrang(params.page, this.pageCount)
          .subscribe({
            next: (result) => {
              this.danhSachPhim = result.items;
              this.totalPages = result.totalPages;
            },
          });
      },
    });
  }
  handleAddedMovie() {
    this.phimService
      .layDanhSachPhimPhanTrang(this.currentPage, this.pageCount)
      .subscribe({
        next: (result) => {
          this.danhSachPhim = result.items;
          this.totalPages = result.totalPages;
        },
      });
  }
  handleDelete(va){
    console.log(va)
  // this.phimService.xoaPhim(va)
  // .subscribe({
  //   next: (result)=>{
      
  //   }
  // })
}

}
