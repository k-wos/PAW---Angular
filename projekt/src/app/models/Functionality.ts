import { Task } from "./Task";

export class Functionality {
    id?: number;
    name?: string;
    description?: string;
    priority?: number;
    project?: string;
    owner?: string;
    status?: string;
    tasks?: Task[];
  }