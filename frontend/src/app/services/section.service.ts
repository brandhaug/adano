import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";
import {HttpClient} from "@angular/common/http";
import {Section} from "../models/section.model";
import { catchError } from 'rxjs/operators';

@Injectable()
export class SectionService {

  constructor(private http: HttpClient) { }

  getSections(path: string): Observable<Section[]> {
    return this.http.get<Section[]>(environment.apiBaseUrl + '/section?paths_contains=' + path + "&_sort=order:asc")
      .pipe(catchError(ErrorService.handleError));
  }
}
