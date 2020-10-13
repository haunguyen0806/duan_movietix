import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators'
import { Movie } from '../models/movies'

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  movieListSubject = new BehaviorSubject([]);
  movieList = this.movieListSubject.asObservable();

  constructor(private api: ApiService) {}

  layDanhSachPhim(): Observable<Movie[]> {
    const url = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return this.api.get<Movie[]>(url).pipe(
      tap((result) => {
        this.movieListSubject.next(result);
      })
    );
  }
<<<<<<< HEAD
  layChiTietPhim(maPhim: string): Observable<any>{
=======

  layDanhSachPhimPhanTrang(
    soTrang = 1,
    soPhanTuTrenTrang = 5
  ): Observable<any> {
    return this.api.get(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );
  }

  layChiTietPhim(maPhim: string): Observable<any> {
>>>>>>> 0070081f17ae9968331698469921127c9fa17013
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;

    return this.api.get(url);
  }
<<<<<<< HEAD
=======

  themPhim(values: any): Observable<any> {
    const url = 'QuanLyPhim/ThemPhimUploadHinh';
    const obj = {
      ...values,
      maNhom: 'GP03',
    };
    const formData = new FormData();

    for (let key in obj) {
      formData.append(key, obj[key]);
    }

    return this.api.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
>>>>>>> 0070081f17ae9968331698469921127c9fa17013
}
3