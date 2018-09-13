import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";
import {Pro} from "../models/pro.model";
import {catchError, map} from 'rxjs/operators';
import {makeStateKey, TransferState} from "@angular/platform-browser";

const prosKey = makeStateKey('pros');

@Injectable({
  providedIn: 'root'
})
export class ProsService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getPros(): Observable<Pro[]> {
    let pros = this.state.get(prosKey, null as any);

    if (pros) {
      return of(pros);
    } else {
      return this.http.get<Pro[]>(environment.apiBaseUrl + '/pro')
        .pipe(
          map(res => {
            this.state.set(prosKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
