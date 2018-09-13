import { Injectable } from '@angular/core';
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  constructor(private http: HttpClient) { }

  createInquiry(body) {
    return this.http.post(environment.apiBaseUrl + '/inquiry', body)
      .pipe(catchError(ErrorService.handleError));
  }
}
