(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"#app {\n  height: auto;\n  width: auto;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n/* Add a new CSS file (styles.css) or integrate the styles into your existing CSS */\n\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  background-color: #f4f4f4;\n  margin-top: 20px;\n}\n\nh1 {\n  margin: 0px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.divider {\n  height: 1px;\n  background-color: black;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-input {\n  display: flex;\n  gap: 20px;\n  min-width:  200px;\n  height: 40px;\n  width: 100%;\n}\n\n.form-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\nlabel {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  width: 100%;\n  padding: 8px;\n  /* margin-bottom: 8px; */\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  padding: 8px;\n  margin-bottom: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  \n  /* Set the height to your desired value */\n  height: 100%;\n  width: 100%;\n}\n\nbutton {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #4caf50;\n  color: #fff;\n  padding: 2vh;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100px;\n  height: 35px;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n#todo-list {\n  margin-top: 20px;\n  height: 100%;\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nul li {\n  width: auto;\n  max-width: 500px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin: 0px;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid black;\n\n}\n\nli strong {\n  display: flex;\n  align-items: center;\n}\n\nli p {\n  font-size: 1.5vh;\n  margin: 0px;\n}\n\nli button { \n  min-width: 100px;\n  max-width: 100px\n}\n\ninput:focus:invalid,\n.error {\n  box-shadow: 0 0 5px 1px red;\n}\n\ntextarea:focus:invalid,\n.error {\n  box-shadow: 0 0 5px 1px red;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e={projects:{Default:[]},addProject:n=>{e.projects[n]||(e.projects[n]=[])},getProjects:()=>Object.keys(e.projects)},n=document.getElementById("todo-list"),r=()=>{const n=document.getElementById("project-select");n.innerHTML="",e.getProjects().forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,n.appendChild(t)}))},o=e=>{n.innerHTML="",e.forEach(((e,t)=>{const r=document.createElement("li");r.innerHTML=`\n      <strong>${e.title}</strong>\n      <p>${e.description}</p>\n      <p>Due Date: ${e.dueDate}</p>\n      <p>Priority: ${e.priority}</p>\n      <button class="complete-btn" data-index="${t}">Complete</button>\n    `,n.appendChild(r)}))},i=n=>e.projects[n]||[];class a{constructor(e,n,t,r){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.completed=!1}}const s=document.getElementById("project-select"),c=document.getElementById("todo-form"),d=document.getElementById("addProject"),l=e=>{const n=i(e);o(n)},p=n=>{const t=document.getElementById("title"),r=document.getElementById("description"),o=document.getElementById("due-date"),i=t.value,d=r.value,p=o.value,u=document.getElementById("priority").value,m=s.value;let f=!0;if(t.checkValidity()?(t.setCustomValidity(""),t.classList.remove("error")):(t.setCustomValidity("Please enter a title"),t.value="",t.reportValidity(),t.classList.add("error"),f=!1),r.checkValidity()?(r.setCustomValidity(""),r.classList.remove("error")):(r.setCustomValidity("Please enter a description"),r.reportValidity(),r.classList.add("error"),f=!1),o.checkValidity()?(o.setCustomValidity(""),o.classList.remove("error")):(o.setCustomValidity("Please enter a valid due date"),o.reportValidity(),o.classList.add("error"),f=!1),console.log("Form is valid:",f),n.preventDefault(),!f)return t.setCustomValidity(""),r.setCustomValidity(""),void o.setCustomValidity("");const x=new a(i,d,p,u);var g,h;g=m,h=x,e.projects[g]||e.addProject(g),e.projects[g].push(h),l(m),c.reset()},u=()=>{const n=prompt("Enter a new project name:");n&&(e.addProject(n),r())},m=()=>{const e=s.value;l(e)};var f=t(379),x=t.n(f),g=t(795),h=t.n(g),v=t(569),y=t.n(v),b=t(565),j=t.n(b),E=t(216),C=t.n(E),w=t(589),L=t.n(w),I=t(426),V={};V.styleTagTransform=L(),V.setAttributes=j(),V.insert=y().bind(null,"head"),V.domAPI=h(),V.insertStyleElement=C(),x()(I.Z,V),I.Z&&I.Z.locals&&I.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{(()=>{r();const e=i("Default");o(e)})(),(()=>{const n=document.getElementById("project-select");document.getElementById("todo-form").addEventListener("submit",p),d.addEventListener("click",u),n.addEventListener("change",m),document.addEventListener("click",(t=>{if(t.target.classList.contains("complete-btn")){const r=t.target.dataset.index,a=n.value;((n,t)=>{const r=e.projects[n].splice(t,1)[0];r.completed=!0;const o=e.projects.Completed||[];o.push(r),e.projects.Completed=o})(a,r);const s=i(a);o(s)}}))})()}))})()})();