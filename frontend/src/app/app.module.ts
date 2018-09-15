import {BrowserModule, BrowserTransferStateModule, TransferState} from '@angular/platform-browser';
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
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap';
import {AllProjectsComponent} from './components/all-projects/all-projects.component';
import {ProsComponent} from './components/pros/pros.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {SeoComponent} from './components/seo/seo.component';
import {NewWebsiteComponent} from './components/new-website/new-website.component';
import {DesignComponent} from './components/design/design.component';
import {WebDesignComponent} from './components/web-design/web-design.component';
import {ConsultationFormComponent} from './components/consultation-form/consultation-form.component';
import {FlashMessagesModule} from "angular2-flash-messages";
import {SwiperModule} from 'ngx-swiper-wrapper';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {Angulartics2Module} from "angulartics2";
import {AppRoutingModule} from "./app-routing.module";
import {StepsComponent} from './components/steps/steps.component';
import {EcommerceComponent} from './components/ecommerce/ecommerce.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {CallToActionComponent} from './components/call-to-action/call-to-action.component';
import {MarkdownModule} from "ngx-markdown";
import {CookieNoticeComponent} from './components/cookie-notice/cookie-notice.component';
import {CookieService} from 'ngx-cookie-service';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleComponent} from "./components/article/article.component";
import {AllArticlesComponent} from "./components/all-articles/all-articles.component";

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
    CookieNoticeComponent,
    ArticlesComponent,
    ArticleComponent,
    AllArticlesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxPageScrollModule,
    Angulartics2Module.forRoot([Angulartics2Mixpanel, Angulartics2GoogleAnalytics]),
    SwiperModule,
    FlashMessagesModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [
    CookieService
  ],
  entryComponents: [
    ProjectComponent,
    ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
