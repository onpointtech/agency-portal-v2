import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SwalObject } from '../service-objects/swal-object';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private router: Router) { }

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

  custom(swalObject: any){
    return Swal.fire(swalObject);
  }
}
