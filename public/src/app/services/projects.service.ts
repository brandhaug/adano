import {Injectable} from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Project} from '../models/project.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiBaseUrl + '/project')
      .pipe(catchError(ErrorService.handleError));
  }

  getProjectByUrl(projectUrl: string): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiBaseUrl + '/project?url=' + projectUrl)
      .pipe(catchError(ErrorService.handleError));
  }
}
