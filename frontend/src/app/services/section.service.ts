import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";
import {HttpClient} from "@angular/common/http";
import {Section} from "../models/section.model";
import {catchError, map} from 'rxjs/operators';
import {makeStateKey, TransferState} from "@angular/platform-browser";

const sectionsKey = makeStateKey('sections');

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getSections(path: string): Observable<Section[]> {
    let sections = this.state.get(sectionsKey, null as any);

    if (sections) {
      return of(sections);
    } else {
      return this.http.get<Section[]>(environment.apiBaseUrl + '/section?paths_contains=' + path + "&_sort=order:asc")
        .pipe(
          map(res => {
            this.state.set(sectionsKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
