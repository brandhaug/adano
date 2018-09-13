import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Article} from "../../models/article.model";
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {ArticlesService} from "../../services/articles.service";
import {BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  apiBaseUrl = environment.apiBaseUrl;
  @Input() articles: Article[];

  constructor(private articlesService: ArticlesService,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  openArticle(article: Article) {
  }
}
