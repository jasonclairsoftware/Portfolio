import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { Tag } from '../_models/tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CollapseModule, CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

 projects = {} as Project[];
 iscollapsed: boolean = true;
 filtering: boolean = false;

 java: boolean = false;
 angular: boolean = false;
 csharp: boolean = false;
 cplusplus: boolean = false;
 javascript: boolean = false;
 typescript: boolean = false;



  constructor(private titleservice: Title, private projectService: ProjectsService){
    titleservice.setTitle("Jason Clair | Projects");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filtertags: Tag[] = [];

    if(this.java) {
      filtertags.push(Tag.JAVA);
    }
    if(this.angular) {
      filtertags.push(Tag.ANGULAR);
    }
    if(this.csharp) {
      filtertags.push(Tag.CSHARP);
    }
    if(this.cplusplus) {
      filtertags.push(Tag.CPLUSPLUS);
    }
    if(this.javascript) {
      filtertags.push(Tag.JAVASCRIPT);
    }
    if(this.typescript) {
      filtertags.push(Tag.TYPESCRIPT);
    }

    if(this.java || this.angular || this.csharp || this.cplusplus || this.javascript || this.typescript) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filtertags);
  }

  resetFilters() {
    this.java = false;
    this.angular = false;
    this.csharp = false;
    this.cplusplus = false;
    this.javascript = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();

  }
}
