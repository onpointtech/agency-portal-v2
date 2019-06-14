import { Injectable } from '@angular/core';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  overlayContainer: ToastContainerDirective;

  constructor(private toastr: ToastrService) { 
    this.toastr = toastr;
  }

  success(title: string, text: string, id: number){
    this.toastr.success(text, title + " " + id);
  }

  info(title: string, text:string){
     this.toastr.info(text, title)
  }

 warning(title: string, text:string){
    this.toastr.warning(text, title)
 }

 danger(title: string, text:string){
  this.toastr.error(text, title);
 }


}