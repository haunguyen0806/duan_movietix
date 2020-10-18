import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RapService {
  constructor(private api: ApiService) {}
  layThongTinLichChieu(maHeThongRap: string): Observable<any> {
    const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`;
    return this.api.get(url);
  }
  layThongTinHeThongRap(): Observable<any> {
    const url= 'QuanLyRap/LayThongTinHeThongRap'
    return this.api.get(url)
  }
}
