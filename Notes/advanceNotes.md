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
