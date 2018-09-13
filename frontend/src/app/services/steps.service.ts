import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Step} from "../models/step.model";
import {makeStateKey, TransferState} from "@angular/platform-browser";

const stepsKey = makeStateKey('steps');

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getSteps(): Observable<Step[]> {
    let steps = this.state.get(stepsKey, null as any);

    if (steps) {
      return of(steps);
    } else {
      return this.http.get<Step[]>(environment.apiBaseUrl + '/step')
        .pipe(
          map(res => {
            this.state.set(stepsKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
