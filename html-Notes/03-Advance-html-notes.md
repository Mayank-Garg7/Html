# Advanced HTML Notes  

These notes cover advanced HTML topics that will help you build professional and feature-rich web applications. Practice the examples provided to understand how these concepts work in real-world projects!  

---

## Topics Covered  

### 1. **Creating Graphics with SVG and Canvas**  
Want to add shapes, drawings, or interactive graphics to your website? Here’s how!  

#### **SVG (Scalable Vector Graphics):**  
- SVG is a way to create graphics (like shapes and images) that don’t lose quality when zoomed in or resized.  
- SVG is written in code using XML and can be styled with CSS or controlled with JavaScript.  

**Common SVG Tags:**  
- `<svg>`: The container for SVG content.  
- `<circle>`: Creates circles.  
- `<rect>`: Draws rectangles.  
- `<line>`: Draws lines.  

**Example (SVG):**  
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

#### **Canvas:**  
- The `<canvas>` tag provides a blank area where you can draw using JavaScript.  
- Use `getContext('2d')` to start drawing 2D shapes or images.  

**Example (Canvas):**  
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(20, 20, 150, 50);
</script>
```

---

### 2. **Improving Accessibility with ARIA Roles**  
Make your web pages easier to use for everyone, especially people with disabilities!  

#### **What Are ARIA Roles?**  
ARIA (Accessible Rich Internet Applications) adds extra information to elements to help screen readers understand them better.  

**Common ARIA Roles:**  
- `role="button"`: Tells the browser an element is a button.  
- `role="navigation"`: Marks navigation menus.  
- `role="dialog"`: Labels pop-ups or modal boxes.  
- `role="alert"`: Shows important messages.  

**Example:**  
```html
<button role="button" aria-label="Close">X</button>
<div role="dialog" aria-labelledby="dialogTitle" aria-hidden="true">
  <h2 id="dialogTitle">Dialog Box</h2>
</div>
```

---

### 3. **Building Reusable Web Components**  
Web components allow you to create custom elements that work like standard HTML tags.  

#### **Key Parts of Web Components:**  
1. **Custom Elements:** Create your own HTML tags like `<my-button>`.  
2. **Shadow DOM:** Encapsulate (hide) styles and structure inside components.  
3. **HTML Templates:** Define reusable pieces of code.  

**Example:**  
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
      this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
    }
  }
  customElements.define('my-button', MyButton);
</script>

<my-button></my-button>
```

---

### 4. **Advanced Form Validation**  
Make sure users enter the correct information in your forms with advanced validation techniques!  

#### **HTML5 Validation Features:**  
- Use attributes like `required`, `maxlength`, and `pattern` to set rules for inputs.  

#### **Custom Validation with JavaScript:**  
- Add your own checks for better control over the user’s input.  

**Example:**  
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

---

### 5. **Using HTML5 APIs**  
HTML5 APIs let you create interactive features for your website, like finding the user’s location or saving data locally.  

#### **Common HTML5 APIs:**  
1. **Geolocation API:** Finds the user’s location (with their permission).  
2. **Web Storage API:** Saves data in the browser for later use.  
3. **Canvas API:** Draws graphics dynamically.  

**Examples:**  
```html
<script>
  // Geolocation Example
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
  });

  // Web Storage Example
  localStorage.setItem('username', 'JohnDoe'); // Save data
  console.log(localStorage.getItem('username')); // Retrieve data
</script>
```

---

### Summary  
These advanced HTML topics allow you to create professional and interactive web pages. By practicing these examples, you’ll be well on your way to mastering advanced web development concepts!  

---
