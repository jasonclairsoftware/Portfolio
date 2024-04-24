import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Sample Angular Project", imagelinks: ["../../assets/me.jpg", "../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Simple angular project", description: "description", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: "Sample Fluid Simulation", imagelinks: ["../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Fluid Simulation in Java", description: "description", tags: [Tag.JAVA]},
    {id: 2, name: "Sample Angular Project", imagelinks: ["../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Simple angular project", description: "description", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 3, name: "Sample Angular Project", imagelinks: ["../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Simple angular project", description: "description", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 4, name: "Sample Angular Project", imagelinks: ["../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Simple angular project", description: "description", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 5, name: "Sample Angular Project", imagelinks: ["../../assets/me.jpg"], projectlink: "https://github.com/jasonclairsoftware", summary: "Simple angular project", description: "description", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]}

   ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project  = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError("There is no project with id of: " + id);
    }

    return project;
  }
}
