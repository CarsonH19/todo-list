// uiModule.js
import { renderProjects, renderTodos } from "./domModule.js";
import { TodoListModule } from "./todoListModule.js";
import { Todo } from "./todo.js";
import { ProjectsModule } from "./projectModule.js";

const projectSelect = document.getElementById("project-select");
const todoForm = document.getElementById("todo-form");
const addProjectButton = document.getElementById("addProject");

const initUI = () => {
  renderProjects();
  const defaultTodos = TodoListModule.getTodos("Default");
  renderTodos(defaultTodos);
};

const renderTodosForProject = (projectName) => {
  const todos = TodoListModule.getTodos(projectName);
  renderTodos(todos);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  const selectedProject = projectSelect.value;
  const newTodo = new Todo(title, description, dueDate, priority);

  TodoListModule.addTodo(selectedProject, newTodo);
  renderTodosForProject(selectedProject);

  // Clear form inputs
  todoForm.reset();
};

const handleAddProject = () => {
  const newProjectName = prompt("Enter a new project name:");
  if (newProjectName) {
    ProjectsModule.addProject(newProjectName);
    renderProjects();
  }
};

const handleProjectChange = () => {
  const selectedProject = projectSelect.value;
  renderTodosForProject(selectedProject);
};

const attachEventListeners = () => {
  const projectSelect = document.getElementById("project-select");
  const todoForm = document.getElementById("todo-form");

  todoForm.addEventListener("submit", handleFormSubmit);
  addProjectButton.addEventListener("click", handleAddProject);
  projectSelect.addEventListener("change", handleProjectChange);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
      console.log("Complete button clicked!");
      const index = e.target.dataset.index;
      const selectedProject = projectSelect.value;
      TodoListModule.completeTodo(selectedProject, index);
      const updatedTodos = TodoListModule.getTodos(selectedProject);
      renderTodos(updatedTodos);
      console.log(projectSelect);
    }
  });
};

export { initUI, handleAddProject, handleProjectChange, attachEventListeners };
