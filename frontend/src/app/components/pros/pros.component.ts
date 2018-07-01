import {Component, Input, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {Section} from "../../models/section.model";
import {ProsService} from "../../services/pros.service";
import {Pro} from "../../models/pro.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.scss']
})
export class ProsComponent implements OnInit {

  @Input() content: Section;
  apiBaseUrl = environment.apiBaseUrl;


  pros: Pro[];

  constructor(private mixpanel: Angulartics2Mixpanel,
              private prosService: ProsService) { }

  ngOnInit() {
    this.prosService.getPros().subscribe(pros => {
      this.pros = pros;
    })
  }

  contactClicked() {
    this.mixpanel.eventTrack('Clicked header contact link', null);
  }
}
