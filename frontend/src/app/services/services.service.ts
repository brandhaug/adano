import {Injectable} from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Service} from '../models/service.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";
import {makeStateKey, TransferState} from "@angular/platform-browser";

const servicesKey = makeStateKey('services');

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getServices(path: string): Observable<Service[]> {
    let services = this.state.get(servicesKey, null as any);

    if (services) {
      return of(services);
    } else {
      return this.http.get<Service[]>(environment.apiBaseUrl + '/service?paths_contains=' + path + '&_sort=order:asc')
        .pipe(
          map(res => {
            this.state.set(servicesKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
