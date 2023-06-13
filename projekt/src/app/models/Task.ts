import { Functionality } from "./Functionality";

export class Task {
    id?: number;
    name?: string;
    description?: string;
    priority?: number;
    functionalityId?: number;
    functionality?: Functionality;
    estimatedTime?: Date;
    status?: string;
    createdDate?: string;
    startDate?: Date;
    endDate?: Date;
    assignedUser?: string;
}