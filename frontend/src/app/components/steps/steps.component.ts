import {Component, Input, OnInit} from '@angular/core';
import {Step} from "../../models/step.model";
import {environment} from "../../../environments/environment";
import {Section} from "../../models/section.model";
import {StepsService} from "../../services/steps.service";
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() content: Section;
  apiBaseUrl = environment.apiBaseUrl;

  steps: Step[];

  constructor(private mixpanel: Angulartics2Mixpanel,
              private stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.getSteps().subscribe(steps => {
      this.steps = steps;
    });
  }
}
