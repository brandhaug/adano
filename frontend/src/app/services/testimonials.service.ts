import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Testimonial} from '../models/testimonial.model';
import {environment} from '../../environments/environment';
import {ErrorService} from "./error.service";
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from "rxjs";
import {makeStateKey, TransferState} from "@angular/platform-browser";

const testimonialsKey = makeStateKey('testimonials');

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getTestimonials(): Observable<Testimonial[]> {
    let testimonials = this.state.get(testimonialsKey, null as any);

    if (testimonials) {
      return of(testimonials);
    } else {
      return this.http.get<Testimonial[]>(environment.apiBaseUrl + '/testimonial?_sort=order:asc')
        .pipe(
          map(res => {
            this.state.set(testimonialsKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }

  getTestimonialByProject(project: string): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(environment.apiBaseUrl + '/testimonial?project=' + project)
      .pipe(catchError(ErrorService.handleError));
  }

}
