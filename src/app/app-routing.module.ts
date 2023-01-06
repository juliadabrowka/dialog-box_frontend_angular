import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ActivePageComponent } from './components/active-page/active-page.component';
import { CharityPageComponent } from './components/charity-page/charity-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeriePageComponent } from './components/serie-page/serie-page.component';
import {SeriePageDetailsResolver} from './components/serie-page/serie-page-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'about-us',
    component: AboutPageComponent
  },
  {
    path: 'charity',
    component: CharityPageComponent
  },
  {
    path: 'active',
    component: ActivePageComponent
  },
  {
    path: 'serie/:slug',
    component: SeriePageComponent,
    resolve: {
      slug: SeriePageDetailsResolver
    }
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
