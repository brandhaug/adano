import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {Observable, of} from "rxjs";
import {Article} from "../models/article.model";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {ErrorService} from "./error.service";

const articlesKey = makeStateKey('articles');

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient,
              private state: TransferState) {
  }

  getLatestArticles(): Observable<Article[]> {
    let articles = this.state.get(articlesKey, null as any);

    if (articles) {
      return of(articles);
    } else {
      return this.http.get<Article[]>(environment.apiBaseUrl + '/article?_sort=createdAt:asc&_limit=3')
        .pipe(
          map(res => {
            this.state.set(articlesKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }

  getArticles(): Observable<Article[]> {
    let articles = this.state.get(articlesKey, null as any);

    if (articles) {
      return of(articles);
    } else {
      return this.http.get<Article[]>(environment.apiBaseUrl + '/article?&_sort=createdAt:asc')
        .pipe(
          map(res => {
            this.state.set(articlesKey, res);
            return res;
          }),
          catchError(ErrorService.handleError)
        );
    }
  }
}
