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

  info(){
     this.toastr.info("This is the Agency Portal", "Information")
  }

 warning(){
    this.toastr.warning("You are about to enter sensitive information.", "Warning")
 }

 danger(){
  this.toastr.error("DANGER", "Danger")
 }


}