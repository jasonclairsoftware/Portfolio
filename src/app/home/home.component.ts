import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  constructor(private titleservice: Title, private projectService: ProjectsService){
    titleservice.setTitle("Jason Clair | Home");
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(1);
  }
}
