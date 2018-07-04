import {BrowserModule, TransferState} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectComponent} from './components/project/project.component';
import {ServiceComponent} from './components/service/service.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {ProjectsComponent} from './components/projects/projects.component';
import {ServicesComponent} from './components/services/services.component';
import {AboutComponent} from './components/about/about.component';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {HeaderComponent} from './components/header/header.component';
import {ProjectsService} from './services/projects.service';
import {ServicesService} from './services/services.service';
import {EmployeesService} from './services/employees.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap';
import {TestimonialsService} from './services/testimonials.service';
import {ErrorService} from "./services/error.service";
import {AllProjectsComponent} from './components/all-projects/all-projects.component';
import {SwiperModule} from "angular2-useful-swiper";
import {ProsComponent} from './components/pros/pros.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {SeoComponent} from './components/seo/seo.component';
import {NewWebsiteComponent} from './components/new-website/new-website.component';
import {DesignComponent} from './components/design/design.component';
import {WebDesignComponent} from './components/web-design/web-design.component';
import {ConsultationFormComponent} from './components/consultation-form/consultation-form.component';
import {LoadingService} from "./services/loading.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {InquiriesService} from './services/inquiries.service';
import {SectionService} from './services/section.service';
import {ProsService} from './services/pros.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {Angulartics2Module} from "angulartics2";
import {AppRoutingModule} from "./app-routing.module";
import { StepsComponent } from './components/steps/steps.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    ProjectComponent,
    ServiceComponent,
    ProjectsComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialsComponent,
    HeaderComponent,
    AllProjectsComponent,
    ProsComponent,
    ContactUsComponent,
    SeoComponent,
    NewWebsiteComponent,
    DesignComponent,
    WebDesignComponent,
    ConsultationFormComponent,
    StepsComponent,
    EcommerceComponent,
    PrivacyComponent,
    CallToActionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxPageScrollModule,
    Angulartics2Module.forRoot([Angulartics2Mixpanel, Angulartics2GoogleAnalytics]),
    SwiperModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ProjectsService,
    ServicesService,
    EmployeesService,
    TestimonialsService,
    ErrorService,
    LoadingService,
    InquiriesService,
    SectionService,
    ProsService
  ],
  entryComponents: [
    ProjectComponent,
    ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
