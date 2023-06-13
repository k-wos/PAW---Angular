import { Task } from "../models/Task";

export interface KanbanColumn {
    title?: string;
    tasks: Task[];
    status: string;
  }