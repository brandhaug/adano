import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private prosService: ProsService) { }

  ngOnInit() {
    this.prosService.getPros().subscribe(pros => {
      this.pros = pros;
    })
  }
}
