
# AdvancedNotes.md

This file includes notes for:

## 1. Working with SVG and Canvas

- **SVG (Scalable Vector Graphics)** is an XML-based format for vector graphics. It is used for creating scalable and interactive images.
  - SVG elements can be manipulated via CSS and JavaScript.
  - Common tags include `<svg>`, `<path>`, `<circle>`, `<rect>`, `<line>`, `<polygon>`, etc.
  
- **Canvas**:
  - The `<canvas>` element in HTML5 allows for drawing 2D graphics via JavaScript.
  - Common methods include `getContext('2d')`, `beginPath()`, `moveTo()`, `lineTo()`, `arc()`, and `fill()`.
  
### Example:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(20, 20, 150, 50);
</script>
```

## 2. Accessibility Standards (ARIA Roles)

- **ARIA (Accessible Rich Internet Applications)** roles enhance accessibility for web applications, especially for screen reader users.
  
### Common ARIA Roles:

- `role="button"`: Defines an element as a button.
- `role="navigation"`: Used for navigation links.
- `role="dialog"`: Indicates a dialog box.
- `role="alert"`: Signals a live region for announcements.

### Example:

```html
<button role="button" aria-label="Close">X</button>
<div role="dialog" aria-labelledby="dialogTitle" aria-hidden="true">
  <h2 id="dialogTitle">Dialog Box</h2>
</div>
```

## 3. Web Components

- **Web Components** are a set of web platform APIs that allow you to create reusable custom elements.
  
  - **Custom Elements**: You can define new HTML tags (e.g., `<my-button>`).
  - **Shadow DOM**: Encapsulates styles and markup for components.
  - **HTML Templates**: Defines content that can be reused.

### Example:

```html
<template id="my-button-template">
  <style>
    button { color: red; }
  </style>
  <button>Click Me</button>
</template>

<script>
  class MyButton extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('my-button-template').content;
      this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
    }
  }
  customElements.define('my-button', MyButton);
</script>

<my-button></my-button>
```

## 4. Advanced Form Validation

- **HTML5** offers built-in form validation attributes such as `required`, `minlength`, `maxlength`, `pattern`, etc.
- You can also use JavaScript for more advanced custom validation.

### Example:

```html
<form id="myForm">
  <input type="text" id="username" required minlength="5" placeholder="Enter Username">
  <input type="email" id="email" required placeholder="Enter Email">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!event.target.checkValidity()) {
      event.preventDefault();
      alert('Please fill out all required fields correctly.');
    }
  });
</script>
```

## 5. HTML5 APIs

- HTML5 provides several APIs for building more interactive and powerful web applications.

### Common APIs:

- **Geolocation API**: To get the user's location.
  - `navigator.geolocation.getCurrentPosition()`
  
- **Web Storage API**: Stores data locally on the user's browser.
  - `localStorage.setItem()`, `localStorage.getItem()`
  
- **Canvas API**: Allows for dynamic, scriptable rendering of 2D shapes and bitmap images.

### Example:

```html
<script>
  // Geolocation Example
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  });

  // Web Storage Example
  localStorage.setItem('username', 'JohnDoe');
  console.log(localStorage.getItem('username'));
</script>
```

