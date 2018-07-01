import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Testimonial} from '../models/testimonial.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";
import {catchError} from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable()
export class TestimonialsService {

  constructor(private http: HttpClient) {
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(environment.apiBaseUrl + '/testimonial')
      .pipe(catchError(ErrorService.handleError));
  }

  getTestimonialByProject(project: string): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(environment.apiBaseUrl + '/testimonial?project=' + project)
      .pipe(catchError(ErrorService.handleError));
  }

}
