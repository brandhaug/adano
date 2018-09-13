import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AllProjectsComponent} from "./components/all-projects/all-projects.component";
import {NewWebsiteComponent} from "./components/new-website/new-website.component";
import {WebDesignComponent} from "./components/web-design/web-design.component";
import {SeoComponent} from "./components/seo/seo.component";
import {EcommerceComponent} from "./components/ecommerce/ecommerce.component";
import {PrivacyComponent} from "./components/privacy/privacy.component";
import {AllArticlesComponent} from "./components/all-articles/all-articles.component";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewWebsiteComponent,
  }, {
    path: 'ny-nettbutikk',
    component: EcommerceComponent
  }, {
    path: 'personvern',
    component: PrivacyComponent
  }, {
    path: 'prosjekter',
    component: AllProjectsComponent
  }, {
    path: 'ny-nettside',
    component: NewWebsiteComponent
  }, {
    path: 'seo',
    component: SeoComponent
  }, {
    path: 'artikler',
    children: [{
      path: '',
      component: AllArticlesComponent
    }, {
      path: ':articleUrl',
      component: ArticleComponent
    }]
  }, {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
