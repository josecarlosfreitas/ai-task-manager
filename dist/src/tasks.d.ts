export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';
export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    createdAt: Date;
}
export interface CreateTaskInput {
    title: string;
    description: string;
    priority: Priority;
}
export interface UpdateTaskInput {
    title?: string;
    description?: string;
    priority?: Priority;
    status?: Status;
}
declare class TaskManager {
    private tasks;
    private nextId;
    create(input: CreateTaskInput): Task;
    findAll(): Task[];
    findById(id: string): Task | null;
    update(id: string, input: UpdateTaskInput): Task | null;
    delete(id: string): boolean;
}
export declare const taskManager: TaskManager;
export {};
//# sourceMappingURL=tasks.d.ts.map