import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutUsComponent} from './about-us/about-us.component';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {FAQComponent} from './faq/faq.component';

const routes: Routes = [
  {path:'AboutUs', component: AboutUsComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: '', redirectTo:'/welcome', pathMatch: 'full' },
  {path: 'welcome', component: ComingSoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
