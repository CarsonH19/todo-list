// projectModule.js
const projects = ["Default"];

export const addProject = (projectName) => {
  if (!projects.includes(projectName)) {
    projects.push(projectName);
  }
};

export const getProjects = () => {
  return projects;
};
