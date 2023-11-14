import { contentDiv, createHtmlElement } from "./index.js";

function render() {
  const navItems = ["HOME", "MENU", "ABOUT"];
  const ul = document.createElement("ul");

  navItems.forEach((item) =>
    ul.appendChild(createHtmlElement("li", null, null, item))
  );

  const nav = document.createElement("nav");
  nav.appendChild(ul);

  contentDiv.appendChild(nav);
}

export { render as renderNav };
