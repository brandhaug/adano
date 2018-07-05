import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Project} from '../../models/project.model';
import {Section} from "../../models/section.model";
import {SectionService} from "../../services/section.service";
import {Service} from "../../models/service.model";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  sections: Section[];
  services: Service[];
  path: string = 'root';

  constructor(private projectsService: ProjectsService,
              private sectionsService: SectionService,
              private servicesService: ServicesService) {
  }

  ngOnInit() {
    this.sectionsService.getSections(this.path).subscribe(sections => {
      this.sections = sections;
    });

    this.projectsService.getProjects().subscribe(res => {
      this.projects = res;
    });

    this.servicesService.getServices(this.path).subscribe(res => {
      this.services = res;
    });

  }

}
