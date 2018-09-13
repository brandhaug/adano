import {Injectable} from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Project} from '../models/project.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";
import {makeStateKey, TransferState} from "@angular/platform-browser";

const projectsKey = makeStateKey('projects');

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getProjects(): Observable<Project[]> {
    let projects = this.state.get(projectsKey, null as any);

    if (projects) {
      return of(projects);
    } else {
      return this.http.get<Project[]>(environment.apiBaseUrl + '/project')
        .pipe(
          map(res => {
            this.state.set(projectsKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }

  getProjectByUrl(projectUrl: string): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiBaseUrl + '/project?url=' + projectUrl)
      .pipe(catchError(ErrorService.handleError));
  }
}
