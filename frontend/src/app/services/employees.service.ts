import {Injectable} from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Employee} from '../models/employee.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";
import {makeStateKey, TransferState} from "@angular/platform-browser";

const employeesKey = makeStateKey('employees');

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getEmployees(): Observable<Employee[]> {
    let employees = this.state.get(employeesKey, null as any);

    if (employees) {
      return of(employees);
    } else {
      return this.http.get<Employee[]>(environment.apiBaseUrl + '/employee')
        .pipe(
          map(res => {
            this.state.set(employeesKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
