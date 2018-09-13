import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
