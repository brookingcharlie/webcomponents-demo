var HelloWorld = document.registerElement("hello-world", {
  prototype: Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        var message = this.getAttribute("message");

        var headingElement = document.createElement("h1");
        headingElement.appendChild(new Text("Hello"));
        this.appendChild(headingElement);

        this.messageElement = document.createElement("p");
        this.messageElement.className = "message";
        this.messageElement.textContent = message;
        this.appendChild(this.messageElement);
      }
    },
    attributeChangedCallback: {
      value: function(attrName, oldVal, newVal) {
        if (attrName === "message") {
          this.messageElement.textContent = newVal;
        }
      }
    }
  })
});
