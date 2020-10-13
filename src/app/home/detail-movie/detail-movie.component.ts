import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../core/services/phim.service'
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  chiTietPhim: any;
  loading: boolean = false;
  error: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: PhimService
  ) {}

  ngOnInit(): void {
    // activatedRoute dùng để lấy params từ trên url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.loading = true;
        this.moviesService.layChiTietPhim(params.id).subscribe({
          next: (result) => {
            this.chiTietPhim = result;
            this.loading = false;
          },
          error: (err) => {
            this.error = true;
            this.loading = false;
          },
        });
      },
    });
  }

}
