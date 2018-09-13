import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Project} from '../../models/project.model';
import {Section} from "../../models/section.model";
import {SectionService} from "../../services/section.service";
import {Service} from "../../models/service.model";
import {ServicesService} from "../../services/services.service";
import {ArticlesService} from "../../services/articles.service";
import {Article} from "../../models/article.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  sections: Section[];
  services: Service[];
  // articles: Article[];
  path: string = 'root';
  apiBaseUrl = environment.apiBaseUrl;

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

    this.servicesService.getServices(this.path).subscribe(services => {
      this.services = services;
    });

    // this.articlesService.getLatestArticles().subscribe(articles => {
    //   this.articles = articles;
    // });
  }

}
