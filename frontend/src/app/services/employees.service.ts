import {Injectable} from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Employee} from '../models/employee.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiBaseUrl + '/employee')
      .pipe(catchError(ErrorService.handleError));
  }
}
