import { test } from 'node:test';
import * as assert from 'node:assert/strict';
import { taskManager } from '../src/tasks.js';
test('Create: should create a task with generated id and TODO status', () => {
    const task = taskManager.create({
        title: 'Test Task',
        description: 'Test Description',
        priority: 'HIGH',
    });
    assert.equal(task.title, 'Test Task');
    assert.equal(task.description, 'Test Description');
    assert.equal(task.priority, 'HIGH');
    assert.equal(task.status, 'TODO');
    assert.ok(task.id);
    assert.ok(task.createdAt instanceof Date);
});
test('Create: should generate unique ids', () => {
    const task1 = taskManager.create({
        title: 'Task 1',
        description: 'Desc 1',
        priority: 'LOW',
    });
    const task2 = taskManager.create({
        title: 'Task 2',
        description: 'Desc 2',
        priority: 'MEDIUM',
    });
    assert.notEqual(task1.id, task2.id);
});
test('Read: findAll should return all tasks', () => {
    const task1 = taskManager.create({
        title: 'Task A',
        description: 'Desc A',
        priority: 'HIGH',
    });
    const task2 = taskManager.create({
        title: 'Task B',
        description: 'Desc B',
        priority: 'LOW',
    });
    const allTasks = taskManager.findAll();
    assert.ok(allTasks.length >= 2);
    assert.ok(allTasks.some((t) => t.id === task1.id));
    assert.ok(allTasks.some((t) => t.id === task2.id));
});
test('Read: findById should return task by id', () => {
    const created = taskManager.create({
        title: 'Find Me',
        description: 'Description',
        priority: 'MEDIUM',
    });
    const found = taskManager.findById(created.id);
    assert.ok(found);
    assert.equal(found.id, created.id);
    assert.equal(found.title, 'Find Me');
});
test('Read: findById should return null when task not found', () => {
    const found = taskManager.findById('nonexistent-id-12345');
    assert.equal(found, null);
});
test('Update: should update provided fields', () => {
    const task = taskManager.create({
        title: 'Original',
        description: 'Original Desc',
        priority: 'LOW',
    });
    const updated = taskManager.update(task.id, {
        title: 'Updated',
        status: 'IN_PROGRESS',
    });
    assert.ok(updated);
    assert.equal(updated.title, 'Updated');
    assert.equal(updated.description, 'Original Desc');
    assert.equal(updated.priority, 'LOW');
    assert.equal(updated.status, 'IN_PROGRESS');
});
test('Update: should not alter id on update', () => {
    const task = taskManager.create({
        title: 'Test',
        description: 'Desc',
        priority: 'HIGH',
    });
    const originalId = task.id;
    taskManager.update(task.id, {
        title: 'New Title',
    });
    const updated = taskManager.findById(originalId);
    assert.ok(updated);
    assert.equal(updated.id, originalId);
});
test('Update: should not alter createdAt on update', () => {
    const task = taskManager.create({
        title: 'Test',
        description: 'Desc',
        priority: 'HIGH',
    });
    const originalCreatedAt = task.createdAt;
    taskManager.update(task.id, {
        title: 'New Title',
    });
    const updated = taskManager.findById(task.id);
    assert.ok(updated);
    assert.equal(updated.createdAt.getTime(), originalCreatedAt.getTime());
});
test('Update: should return null when task not found', () => {
    const result = taskManager.update('nonexistent-id-12345', {
        title: 'New Title',
    });
    assert.equal(result, null);
});
test('Delete: should delete task by id', () => {
    const task = taskManager.create({
        title: 'To Delete',
        description: 'Will be deleted',
        priority: 'LOW',
    });
    const deleted = taskManager.delete(task.id);
    assert.equal(deleted, true);
    const found = taskManager.findById(task.id);
    assert.equal(found, null);
});
test('Delete: should return false when task not found', () => {
    const result = taskManager.delete('nonexistent-id-12345');
    assert.equal(result, false);
});
//# sourceMappingURL=tasks.test.js.map