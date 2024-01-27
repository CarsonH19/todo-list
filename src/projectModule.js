// projectModule.js
const projects = {
  Default: [],
};

const addProject = (projectName) => {
  if (!ProjectsModule.projects[projectName]) {
    ProjectsModule.projects[projectName] = [];
  }
};

const getProjects = () => {
  return Object.keys(ProjectsModule.projects);
};

export const ProjectsModule = {
  projects,
  addProject,
  getProjects,
};
