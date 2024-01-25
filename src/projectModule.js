// projectModule.js
const ProjectModule = (() => {
  let projects = ["Default"];

  const addProject = (projectName) => {
    if (!projects.includes(projectName)) {
      projects.push(projectName);
    }
  };

  const getProjects = () => {
    return projects;
  };

  return {
    addProject,
    getProjects,
  };
})();
