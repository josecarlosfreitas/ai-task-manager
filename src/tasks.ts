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

class TaskManager {
  private tasks: Map<string, Task> = new Map();
  private nextId: number = 1;

  create(input: CreateTaskInput): Task {
    const id = String(this.nextId++);
    const task: Task = {
      id,
      title: input.title,
      description: input.description,
      priority: input.priority,
      status: 'TODO',
      createdAt: new Date(),
    };
    this.tasks.set(id, task);
    return task;
  }

  findAll(): Task[] {
    return Array.from(this.tasks.values());
  }

  findById(id: string): Task | null {
    return this.tasks.get(id) || null;
  }

  update(id: string, input: UpdateTaskInput): Task | null {
    const task = this.tasks.get(id);
    if (!task) {
      return null;
    }

    // Partial update: only update provided fields
    if (input.title !== undefined) {
      task.title = input.title;
    }
    if (input.description !== undefined) {
      task.description = input.description;
    }
    if (input.priority !== undefined) {
      task.priority = input.priority;
    }
    if (input.status !== undefined) {
      task.status = input.status;
    }

    return task;
  }

  delete(id: string): boolean {
    return this.tasks.delete(id);
  }
}

export const taskManager = new TaskManager();
