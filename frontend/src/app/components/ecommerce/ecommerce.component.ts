import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";
import {Service} from "../../models/service.model";
import {SectionService} from "../../services/section.service";
import {ServicesService} from "../../services/services.service";
import {Section} from "../../models/section.model";
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  projects: Project[];
  sections: Section[];
  services: Service[];
  path: string = 'nettbutikk';

  constructor(private projectsService: ProjectsService,
              private sectionsService: SectionService,
              private servicesService: ServicesService) {
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
  }

}
