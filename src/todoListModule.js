// todoListModule.js
const projects = {
  Default: [],
};

export const addTodo = (projectName, todo) => {
  if (!projects[projectName]) {
    projects[projectName] = [];
  }
  projects[projectName].push(todo);
};

export const completeTodo = (projectName, index) => {
  projects[projectName][index].completed = true;
};

export const getTodos = (projectName) => {
  return projects[projectName] || [];
};

export const TodoListModule = {
  addTodo,
  completeTodo,
  getTodos,
};