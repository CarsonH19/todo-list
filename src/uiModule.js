// uiModule.js
import { renderProjects, renderTodos } from './domModule.js';
import { TodoListModule } from './todoListModule.js';
import { Todo } from './todo.js';

const projectSelect = document.getElementById("project-select");
const todoForm = document.getElementById("todo-form");

const initUI = () => {
  renderProjects();
  const defaultTodos = TodoListModule.getTodos("Default");
  renderTodos(defaultTodos);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const notes = document.getElementById("notes").value;
  const checklist = document.getElementById("checklist").value.split(',').map(item => item.trim());

  const selectedProject = projectSelect.value;
  const newTodo = new Todo(title, description, dueDate, priority, notes, checklist);

  TodoListModule.addTodo(selectedProject, newTodo);
  const updatedTodos = TodoListModule.getTodos(selectedProject);
  renderTodos(updatedTodos);

  // Clear form inputs
  todoForm.reset();
};

const attachEventListeners = () => {
  todoForm.addEventListener("submit", handleFormSubmit);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
      const index = e.target.dataset.index;
      const selectedProject = projectSelect.value;
      TodoListModule.completeTodo(selectedProject, index);
      const updatedTodos = TodoListModule.getTodos(selectedProject);
      renderTodos(updatedTodos);
    }
  });
};

export {
  initUI,
  attachEventListeners,
};
