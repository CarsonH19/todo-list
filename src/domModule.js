// domModule.js
const DomModule = (() => {
  const todoListContainer = document.getElementById("todo-list");
  const projectSelect = document.getElementById("project-select");

  const renderProjects = () => {
    const projects = ProjectModule.getProjects();
    projectSelect.innerHTML = "";
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      projectSelect.appendChild(option);
    });
  };

  const renderTodos = (todos) => {
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

  return {
    renderProjects,
    renderTodos,
  };
})();
