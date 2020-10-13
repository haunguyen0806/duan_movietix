import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {
  slideConfig = {dots: false};

  DanhSachPhimSapChieu=[
    {tenPhim:"Sóng Thần Ở Haeundae",hinhAnh:'../../../../../assets/img/phimsc1.png',thoigian:"120 phút"},
    {tenPhim:"Tay Đấm Mỹ",hinhAnh:'../../../../../assets/img/phimsc2.png',thoigian:"98 phút"},
    {tenPhim:"Sài Gòn Trong Cơn Mưa",hinhAnh:'../../../../../assets/img/phimsc3.png',thoigian:"105 phút"},
    {tenPhim:"Chồng Người Ta",hinhAnh:'../../../../../assets/img/phimsc4.png',thoigian:"90 phút"},
    {tenPhim:"The Hitman's Wife's Bodyguard",hinhAnh:'../../../../../assets/img/phimsc5.png',thoigian:"100 phút"},
    {tenPhim:"Những Cô Vợ Hành Động",hinhAnh:'../../../../../assets/img/phimsc6.png',thoigian:"100 phút"},
    {tenPhim:"Monster Hunter",hinhAnh:'../../../../../assets/img/phimsc7.jpg',thoigian:"120 phút"},
    {tenPhim:"Vùng Đất Câm Lặng 2",hinhAnh:'../../../../../assets/img/phimsc8.jpg',thoigian:"120 phút"},  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
