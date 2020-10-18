import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";
import { Theater } from '../models/theater'
@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  theaterListSubject = new BehaviorSubject([]);
  theaterList = this.theaterListSubject.asObservable();

  constructor(private api: ApiService) { }

  layDanhSachRap(): Observable<Theater[]> {
    const url="QuanLyRap/LayThongTinHeThongRap";
    return this.api.get<Theater[]>(url).pipe(
      tap((result) => {
        this.theaterListSubject.next(result);
      })
    )
  };
}
