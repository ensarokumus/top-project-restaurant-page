import { contentDiv, createHtmlElement } from "./index.js";

function render() {
  const section = createHtmlElement("section", "menu", ["discover"], null);

  const discoverHeader = createHtmlElement(
    "div",
    null,
    ["center-header", "discover__header"],
    null
  );
  discoverHeader.appendChild(
    createHtmlElement("h3", null, ["h-small"], "discover")
  );
  discoverHeader.appendChild(
    createHtmlElement("h2", null, ["h-large"], "our menu")
  );
  section.appendChild(discoverHeader);

  const discoverContent = createHtmlElement(
    "div",
    null,
    ["discover__content"],
    null
  );

  const discoverBreakfast = createHtmlElement(
    "div",
    null,
    ["discover__breakfast"],
    null
  );
  discoverBreakfast.appendChild(
    createHtmlElement("h3", null, ["h-medium"], "all day breakfast")
  );
  discoverBreakfast.appendChild(
    createHtmlElement(
      "div",
      null,
      ["menu-item"],
      `<span>granola &amp; yogurt </span><span class="underline"></span><span>$16</span>`
    )
  );
  discoverBreakfast.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "granola + greek yogurt + seasonal fruits"
    )
  );
  discoverBreakfast.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `<span>house made banana bread</span><span class="underline"></span><span>$6.5</span>`
    )
  );
  discoverBreakfast.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "banana bread toasted with butter"
    )
  );
  discoverContent.appendChild(discoverBreakfast);

  const discoverCoffee = createHtmlElement(
    "div",
    null,
    ["discover__coffee"],
    null
  );
  discoverCoffee.appendChild(
    createHtmlElement("h3", null, ["h-medium"], `coffee &amp; hot drinks`)
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `<span>Latte</span><span class="underline"></span><span>$4.3</span>`
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "made by adding perfectly steamed milk"
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `flat white<span class="underline"></span>$4.3`
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "velvety steamed milk poured over a shot of espresso"
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `Cappucino<span class="underline"></span>$4.3`
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "silky frothed milk poured over a shot of espresso, topped with a touch of chocolate"
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `Piccolo<span class="underline"></span>$3.8`
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement("p", null, ["menu-detail"], "a baby latte")
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-item"],
      `Long Black<span class="underline"></span>$4.3`
    )
  );
  discoverCoffee.appendChild(
    createHtmlElement(
      "p",
      null,
      ["menu-detail"],
      "a double-shot of espresso over hot water"
    )
  );
  discoverContent.appendChild(discoverCoffee);

  section.appendChild(discoverContent);
  contentDiv.appendChild(section);
}

export { render as renderMenu };
