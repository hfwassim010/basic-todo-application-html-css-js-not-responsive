# To-Do App

## Developed by: HF Wassim

### Overview
This is a simple To-Do application designed to manage tasks. The application allows users to:
- Add tasks
- Update tasks
- Delete individual tasks
- Delete all tasks

<video width="600" controls>
    <source src="assets/videos/2024-12-01 00-54-27.mp4" type="video/mp4">
</video>

The app uses basic HTML, CSS, and JavaScript for functionality. It operates on task objects and utilizes various JavaScript array methods for task management.

### Features
- **Add Task**: Add new tasks to the list with a unique identifier.
- **Update Task**: Edit the name of a task.
- **Delete Task**: Remove a specific task from the list.
- **Delete All Tasks**: Remove all tasks from the list.
- **Array Methods**: Utilizes JavaScript array methods (`filter()`, `map()`, `push()`) to manage tasks.
- **Task Objects**: Each task is represented as an object with properties like `id` and `name`.

### Task Object Structure
Each task is stored as an object in the following format:
```javascript
{
    id: <unique_identifier>,  // Unique task identifier
    name: <task_name>         // Name of the task
}
