import { createHtmlElement } from "./index.js";

function render() {
  document.body.appendChild(
    createHtmlElement(
      "div",
      null,
      ["attribution"],
      `Photo by
    <a href="https://unsplash.com/@nate_dumlao">Nathan Dumlao</a> on
    <a
      href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
      >Unsplash</a
    >`
    )
  );
}

export { render as renderAtt };
