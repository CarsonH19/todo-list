// todoListModule.js
const TodoListModule = (() => {
  let todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const completeTodo = (index) => {
    todos[index].completed = true;
  };

  // Other todo list operations...

  return {
    addTodo,
    completeTodo,
    // Other functions...
  };
})();
