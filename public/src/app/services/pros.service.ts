import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";
import {Pro} from "../models/pro.model";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProsService {

  constructor(private http: HttpClient) { }

  getPros(): Observable<Pro[]> {
    return this.http.get<Pro[]>(environment.apiBaseUrl + '/pro')
      .pipe(catchError(ErrorService.handleError));
  }
}
