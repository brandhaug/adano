import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading.service';
import {InquiriesService} from '../../services/inquiries.service';
import {Angulartics2Mixpanel} from 'angulartics2/mixpanel';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss']
})
export class ConsultationFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private flashMessagesService: FlashMessagesService,
              private mixpanel: Angulartics2Mixpanel,
              private router: Router,
              private loadingService: LoadingService,
              private inquiriesService: InquiriesService,
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }


  ngOnInit() {
    this.myForm = this.fb.group({
      // 'name': ['', [Validators.required, Validators.minLength(4)]],
      // 'email': ['', [Validators.required, Validators.minLength(5), Validators.pattern('\\S+@\\S+\\.\\S+')]],
      'phoneNumber': ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    });
  }

  submitForm(value: any) {
    this.loadingService.setLoading(true);
    value.url = this.router.url;

    this.inquiriesService.createInquiry(value).subscribe(res => {
      this.flashMessagesService.show('Vellykket, vi tar kontakt.', {cssClass: 'alert-success', timeout: 6000});
      this.loadingService.setLoading(false);
      this.myForm.reset();
    }, err => {
      this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      this.loadingService.setLoading(false);
    });
  }
}
