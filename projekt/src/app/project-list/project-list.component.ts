import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{
  projects!: Project[];

  constructor(private projectService: ProjectService){}

  ngOnInit(){
    this.projects = this.projectService.projects;
  }
}
