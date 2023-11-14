import { contentDiv, createHtmlElement } from "./index.js";

function render() {
  const welcomeDiv = createHtmlElement("div", null, ["welcome"], null);

  const img = createHtmlElement("img", "logo", null, null);
  img.src = "./img/CoffeeBelle-Logo.webp";
  img.alt = "coffee belle logo";
  welcomeDiv.appendChild(img);

  const welcomeDivText = createHtmlElement("div", null, ["welcome-text"], null);
  welcomeDivText.appendChild(
    createHtmlElement("h1", null, ["cursive"], "Welcome")
  );
  welcomeDivText.appendChild(createHtmlElement("hr", null, null, null));
  welcomeDivText.appendChild(
    createHtmlElement("p", null, null, "Only the best blends around the world!")
  );
  welcomeDiv.appendChild(welcomeDivText);

  contentDiv.appendChild(welcomeDiv);
  contentDiv.appendChild(
    createHtmlElement("button", null, null, "SEE THE MENU")
  );
}

export { render as renderHome };
