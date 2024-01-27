import { ProjectsModule } from "./projectModule";

// todoListModule.js
const addTodo = (projectName, todo) => {
  if (!ProjectsModule.projects[projectName]) {
    ProjectsModule.addProject(projectName);
  }
  console.log(`projects: ${ProjectsModule.projects}`);
  console.log(`projectName: ${projectName}`);
  console.log(`Todo: ${todo}`);

  ProjectsModule.projects[projectName].push(todo);
};

const completeTodo = (projectName, index) => {
  const completedTask = ProjectsModule.projects[projectName].splice(index, 1)[0];
  completedTask.completed = true;

  const completedTasks = ProjectsModule.projects["Completed"] || [];
  completedTasks.push(completedTask);
  ProjectsModule.projects["Completed"] = completedTasks;
};

const getTodos = (projectName) => {
  return ProjectsModule.projects[projectName] || [];
};

export const TodoListModule = {
  addTodo,
  completeTodo,
  getTodos,
};
