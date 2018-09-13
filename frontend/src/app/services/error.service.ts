import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  static handleError(err) {
    return throwError(err);
    // let errorMessage = '';
    // if (err.error instanceof Error) {
    //   errorMessage = 'An error occurred: ' + err.error.message;
    // } else {
    //   errorMessage = 'Server returned code: ' + err.status + ', error message is: ' + JSON.stringify(err);
    // }
    // console.error(errorMessage);
    // return new Error(errorMessage);
  }

}
