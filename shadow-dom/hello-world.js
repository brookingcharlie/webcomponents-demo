function createHelloWorld(selector, message) {
    var shadowHost = document.querySelector(selector);
    var shadowRoot = shadowHost.createShadowRoot();

    //// Note that the following doesn't work:
    //// HTML element <link> is ignored in shadow tree.
    //var stylesheetLink = document.createElement("link");
    //stylesheetLink.setAttribute("rel", "stylesheet");
    //stylesheetLink.setAttribute("href", "hello-world.css");
    //shadowRoot.appendChild(stylesheetLink);

    var style = document.createElement("style");
    style.textContent =
      ".hello-world { display: block; margin: 10px 0; }\n" +
      ".hello-world * { margin: 0; padding: 10px; font-family: sans-serif; }\n" +
      ".hello-world h1 { color: #FFF; background-color: #45B; }\n" +
      ".hello-world p.message { color: #666; background-color: #EEE; }"
    shadowRoot.appendChild(style);

    var shadowNode = document.createElement("div");
    shadowNode.className = "hello-world";

    var headingElement = document.createElement("h1");
    headingElement.appendChild(new Text("Hello"));
    shadowNode.appendChild(headingElement);
    
    var messageElement = document.createElement("p");
    messageElement.className = "message";
    messageElement.textContent = message;
    shadowNode.appendChild(messageElement);
    
    shadowRoot.appendChild(shadowNode);
}
