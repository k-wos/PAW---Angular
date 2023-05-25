import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [{
    name: "Domyślny projekt",
    description: "Opis projektu",
  }];
}
