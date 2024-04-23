import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  project: Project = {
    id: 0,
    name: "Sample Angular Project",
    summary: "Test Description",
    description: "",
    projectlink: '',
    imagelinks: [],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]

  }


  constructor(private titleservice: Title){
    titleservice.setTitle("Jason Clair | Projects");
  }
}
