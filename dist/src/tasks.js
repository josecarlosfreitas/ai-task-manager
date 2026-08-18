class TaskManager {
    tasks = new Map();
    nextId = 1;
    create(input) {
        const id = String(this.nextId++);
        const task = {
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
    findAll() {
        return Array.from(this.tasks.values());
    }
    findById(id) {
        return this.tasks.get(id) || null;
    }
    update(id, input) {
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
    delete(id) {
        return this.tasks.delete(id);
    }
}
export const taskManager = new TaskManager();
//# sourceMappingURL=tasks.js.map