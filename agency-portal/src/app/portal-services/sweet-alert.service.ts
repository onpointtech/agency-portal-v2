import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SwalObject } from '../service-objects/swal-object';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  success(title: string, text: string) {
    Swal.fire({
      type: 'success',
      title: title,
      text: text
    })
  }

  error(title: string, text: string) {
    Swal.fire({
      type: 'error',
      title: title,
      text: text
    })
  }

  info(title: string, text: string) {
    Swal.fire({
      type: 'info',
      title: title,
      text: text
    })
  }

  warning(title: string, text: string) {
    Swal.fire({
      type: 'warning',
      title: title,
      text: text
    })
  }

  custom(alertObject: SwalObject, action: string) {
    if(action === "success"){
      this.success(alertObject.title, alertObject.text);
    } else if(action === "error"){
      this.error(alertObject.title, alertObject.text);
    } else if(action === "info"){
      this.info(alertObject.title, alertObject.text);
    } else if(action === "warning"){
      this.warning(alertObject.title, alertObject.text);
    } else {
      this.error("Error", "You have input an invalid action");
    }
  }
}
