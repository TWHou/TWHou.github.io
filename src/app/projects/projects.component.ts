import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  apps: Project[];
  apis: Project[];
  selected = 'app';
  loading = true;
  baseURL = 'assets/';

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjects().then(projects => {
      this.apps = projects.filter(project => project.type === 'app');
      this.apis = projects.filter(project => project.type === 'api');
      this.loading = false;
    });
  }

  select(filter) {
    this.selected = filter;
  }

}
