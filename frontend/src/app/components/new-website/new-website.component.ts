import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project.model";
import {Section} from "../../models/section.model";
import {Service} from "../../models/service.model";
import {Article} from "../../models/article.model";
import {ProjectsService} from "../../services/projects.service";
import {SectionService} from "../../services/section.service";
import {ServicesService} from "../../services/services.service";
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-new-website',
  templateUrl: './new-website.component.html',
  styleUrls: ['./new-website.component.scss']
})
export class NewWebsiteComponent implements OnInit {
  projects: Project[];
  sections: Section[];
  articles: Article[];
  path: string = 'ny-nettside';

  constructor(private projectsService: ProjectsService,
              private sectionsService: SectionService,
              private servicesService: ServicesService,
              private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.sectionsService.getSections(this.path).subscribe(sections => {
      this.sections = sections;
    });

    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });

    this.articlesService.getLatestArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
