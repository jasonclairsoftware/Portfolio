import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

 projects = {} as Project[];


  constructor(private titleservice: Title, private projectService: ProjectsService){
    titleservice.setTitle("Jason Clair | Projects");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
