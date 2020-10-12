import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipe/pipe.module';
import { ModalTrailerComponent } from '../component/modal-trailer/modal-trailer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {UpdateUserComponent} from './components/update-user/update-user.component'
@NgModule({
  declarations: [ModalTrailerComponent,UpdateUserComponent],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalTrailerComponent
  ]
})
export class SharingModule { }
