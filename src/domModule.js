// domModule.js
import { getProjects } from './projectModule.js';

const todoListContainer = document.getElementById("todo-list");
const projectSelect = document.getElementById("project-select");

export const renderProjects = () => {
  const projects = getProjects();
  projectSelect.innerHTML = "";
  projects.forEach((project) => {
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
      <p>Notes: ${todo.notes}</p>
      <p>Checklist: ${todo.checklist.join(', ')}</p>
      <button class="complete-btn" data-index="${index}">Complete</button>
    `;
    todoListContainer.appendChild(listItem);
  });
};
