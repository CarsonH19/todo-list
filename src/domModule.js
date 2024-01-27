// domModule.js
import { ProjectsModule } from './projectModule.js';

const todoListContainer = document.getElementById("todo-list");

export const renderProjects = () => {
  const projectSelect = document.getElementById("project-select");
  projectSelect.innerHTML = "";

  const projectsToRender = ProjectsModule.getProjects();
  projectsToRender.forEach((project) => {
    const option = document.createElement("option");
    option.value = project;
    option.textContent = project;
    projectSelect.appendChild(option);
  });
};

export const renderTodos = (todos) => {
  todoListContainer.innerHTML = "";
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${todo.title}</strong>
      <p>${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <button class="complete-btn" data-index="${index}">Complete</button>
    `;
    todoListContainer.appendChild(listItem);
  });
};
