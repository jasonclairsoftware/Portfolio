import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ProjectsComponent } from './_pages/projects/projects.component';
import { ResumeComponent } from './_pages/resume/resume.component';
import { ContactComponent } from '../app/_pages/contact/contact.component';

export const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"resume", component: ResumeComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", component: HomeComponent}
];
