class MyComponent extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow root to the custom element
    const shadow = this.attachShadow({ mode: 'open' });

    // Create content for the shadow DOM
    const wrapper = document.createElement('div');
    wrapper.textContent = "Hello, this is a custom Web Component!";
    wrapper.style.cssText = `
      padding: 20px;
      background-color: #0078d7;
      color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-size: 1.2em;
    `;

    const icon = document.createElement('div');
    icon.textContent = "👋";
    icon.style.cssText = `
      font-size: 2em;
      margin-bottom: 10px;
    `;

    // Append elements to shadow root
    shadow.appendChild(icon);
    shadow.appendChild(wrapper);
  }
}

// Define the custom element
customElements.define('my-component', MyComponent);
