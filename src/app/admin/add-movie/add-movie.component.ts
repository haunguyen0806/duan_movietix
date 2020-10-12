import { Component,  OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PhimService } from 'src/app/core/services/phim.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  @Output() added = new EventEmitter();
  form: FormGroup;

  constructor(private phimService: PhimService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  handleUploadFile(evt) {

    this.form.patchValue({ hinhAnh: evt.target.files[0] });

    console.log(this.form.value);
  }

  handleAddMovie() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // Goi API thêm phim
    this.phimService.themPhim(this.form.value).subscribe({
      complete: () => {
        // Output ra thằng cha để nó gọi lại API lấy danh sách phim
        this.added.emit();
      },
    });
  }

}
