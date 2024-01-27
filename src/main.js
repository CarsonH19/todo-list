
// main.js
import { initUI, attachEventListeners } from './uiModule.js';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the UI and attach event listeners
  initUI();
  attachEventListeners();
  console.log("main.js DOMContentLoaded");
});
