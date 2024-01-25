// todoListModule.js
const TodoListModule = (() => {
  let projects = {
    Default: [],
  };

  const addTodo = (projectName, todo) => {
    if (!projects[projectName]) {
      projects[projectName] = [];
    }
    projects[projectName].push(todo);
  };

  const completeTodo = (projectName, index) => {
    projects[projectName][index].completed = true;
  };

  const getTodos = (projectName) => {
    return projects[projectName] || [];
  };

  return {
    addTodo,
    completeTodo,
    getTodos,
  };
})();
