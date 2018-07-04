import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Service} from "../models/service.model";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {Step} from "../models/step.model";

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor(private http: HttpClient) {
  }

  getSteps(): Observable<Step[]> {
    return this.http.get<Step[]>(environment.apiBaseUrl + '/step')
      .pipe(catchError(ErrorService.handleError));
  }
}
