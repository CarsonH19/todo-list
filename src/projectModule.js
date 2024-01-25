// projectModule.js
const ProjectModule = (() => {
  let projects = ["Default"];

  const addProject = (projectName) => {
    projects.push(projectName);
  };

  // Other project operations...

  return {
    addProject,
    // Other functions...
  };
})();
