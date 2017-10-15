import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  project: Project;
  baseURL = 'assets/';

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().then(projects => this.project = projects[0]);
  }

}
