const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Draw a gradient
const gradient = ctx.createLinearGradient(0, 0, 500, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');
ctx.fillStyle = gradient;
ctx.fillRect(50, 200, 400, 50);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();
