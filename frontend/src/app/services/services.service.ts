import {Injectable} from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Service} from '../models/service.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  getServices(path: string): Observable<Service[]> {
    return this.http.get<Service[]>(environment.apiBaseUrl + '/service?paths_contains=' + path)
      .pipe(catchError(ErrorService.handleError));
  }
}
