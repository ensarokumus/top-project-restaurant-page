import { contentDiv, createHtmlElement } from "./index.js";

function render() {
  const welcomeDiv = createHtmlElement("div", null, ["welcome"], null);

  const welcomeDivText = createHtmlElement("div", null, ["welcome-text"], null);
  welcomeDivText.appendChild(
    createHtmlElement("h1", null, ["cursive"], "About Us")
  );
  welcomeDivText.appendChild(createHtmlElement("hr", null, null, null));
  welcomeDivText.appendChild(
    createHtmlElement(
      "p",
      null,
      ["about"],
      `LoremA ipsum dolor sit amet consectetur adipisicing elit. Doloribus
      nihil laborum commodi magni est delectus! Rerum illo ea a iure
      possimus delectus! Assumenda, dicta reiciendis a qui optio doloribus
      ipsam.`
    )
  );
  welcomeDiv.appendChild(welcomeDivText);

  contentDiv.appendChild(welcomeDiv);
}

export { render as renderAbout };
