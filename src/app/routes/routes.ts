import { Routes } from '@angular/router';

import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
