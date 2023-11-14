import { renderNav } from "./navbar.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";
import { renderAtt } from "./attribution.js";

const contentDiv = document.querySelector("#content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerHTML = content;

  return element;
}

function home() {
  contentDiv.innerHTML = "";
  renderNav();
  renderHome();
}
function menu() {
  contentDiv.innerHTML = "";
  renderNav();
  renderMenu();
}
function about() {
  contentDiv.innerHTML = "";
  renderNav();
  renderAbout();
}

home();
renderAtt();

document.querySelector("button").addEventListener("click", () => menu());
document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME")
    home(),
      document.querySelector("button").addEventListener("click", () => menu());
  if (target === "MENU") menu();
  if (target === "ABOUT") about();
});

export { createHtmlElement, contentDiv };
