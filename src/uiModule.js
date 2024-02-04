// uiModule.js
import { renderProjects, renderTodos } from "./domModule.js";
import { TodoListModule } from "./todoListModule.js";
import { Todo } from "./todo.js";
import { ProjectsModule } from "./projectModule.js";

const projectSelect = document.getElementById("project-select");
export const todoForm = document.getElementById("todo-form");
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
  const validateInput = (input, errorMessage) => {
    if (!input.checkValidity()) {
      input.setCustomValidity(errorMessage);
      input.reportValidity();
      input.classList.add('error');
      return false;
    } else {
      input.setCustomValidity("");
      input.classList.remove('error');
      return true;
    }
  };

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dueDateInput = document.getElementById("due-date");

  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  const priority = document.getElementById("priority").value;

  const selectedProject = projectSelect.value;

  let formIsValid = true;

  formIsValid = validateInput(titleInput, "Please enter a title") && formIsValid;
  formIsValid = validateInput(descriptionInput, "Please enter a description") && formIsValid;
  formIsValid = validateInput(dueDateInput, "Please enter a valid due date") && formIsValid;

  console.log("Form is valid:", formIsValid);
  e.preventDefault();

  if (!formIsValid) {
    titleInput.setCustomValidity("");
    descriptionInput.setCustomValidity("");
    dueDateInput.setCustomValidity("");
    return;
  }

  // Continue with form submission logic
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
      const index = e.target.dataset.index;
      const selectedProject = projectSelect.value;
      TodoListModule.completeTodo(selectedProject, index);
      const updatedTodos = TodoListModule.getTodos(selectedProject);
      renderTodos(updatedTodos);
    }
  });
};

export { initUI, handleAddProject, handleProjectChange, attachEventListeners };
