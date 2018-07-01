import {Component, Input, OnInit} from '@angular/core';
import {ProjectComponent} from '../project/project.component';
import {Project} from '../../models/project.model';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap";
import {TestimonialsService} from "../../services/testimonials.service";
import {Section} from "../../models/section.model";
import {environment} from "../../../environments/environment";
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Project[];
  @Input() content: Section;
  modalRef: BsModalRef;
  apiBaseUrl = environment.apiBaseUrl;


  constructor(private modalService: BsModalService,
              private mixpanel: Angulartics2Mixpanel,
              private testimonialsService: TestimonialsService) {
  }

  ngOnInit() {

  }

  public openProject(project) {
    this.modalRef = this.modalService.show(ProjectComponent, {class: 'modal-lg'});
    this.modalRef.content.project = project;
    this.mixpanel.eventTrack('Opened project', project);

    this.testimonialsService.getTestimonialByProject(project._id).subscribe(testimonial => {
      this.modalRef.content.testimonial = testimonial[0];
    });
  }

}
