import { Injectable } from '@angular/core';
import { PROJECTS } from '../shared/PROJECTS';

@Injectable()
export class ProjectService {

  projectPromise = Promise.resolve(PROJECTS);

  getProjects() {
      return this.projectPromise;
  }

  getOneProject(id: number | string) {
       return this.projectPromise
          .then(projects => projects.find(project => project.id === +id));
  }

}
