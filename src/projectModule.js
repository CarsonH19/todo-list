// projectModule.js
const projects = {
  Default: [],
};

const addProject = (projectName) => {
  if (!projects[projectName]) {
    projects[projectName] = [];
  }
};

const getProjects = () => {
  return Object.keys(projects);
};

export const ProjectsModule = {
  projects,
  addProject,
  getProjects,
};
