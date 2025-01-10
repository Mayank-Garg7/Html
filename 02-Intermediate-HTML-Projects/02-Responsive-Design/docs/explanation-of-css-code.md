# CSS Styling Guide

This guide explains the structure and functionality of the provided CSS code, focusing on base styles and responsive styles.

---

## Base Styles
These are the default styles applied to elements across the website to maintain consistency.

### Code Explanation:
```css
body {
    font-family: Arial, sans-serif; /* Sets the font style for the entire body */
    line-height: 1.6; /* Adjusts the spacing between lines for better readability */
    margin: 0; /* Removes default margin around the body */
    padding: 0; /* Removes default padding around the body */
    text-align: center; /* Centers text within the body */
}

header {
    background: #333; /* Sets a dark gray background color */
    color: white; /* Changes text color to white for better contrast */
    padding: 1rem 0; /* Adds vertical padding of 1 rem (responsive unit) */
}

main {
    padding: 1rem; /* Adds uniform padding inside the main content area */
}

footer {
    background: #444; /* Sets a slightly lighter gray background color */
    color: white; /* Changes text color to white for better visibility */
    padding: 0.5rem 0; /* Adds vertical padding of 0.5 rem */
    margin-top: 2rem; /* Adds space above the footer */
}
```

---

## Responsive Styles
Responsive styles adjust the layout and appearance based on the screen size to ensure a better user experience on all devices.

### Media Query: `@media (max-width: 768px)`
This query applies styles for screens with a width of **768px or smaller** (typically tablets or small laptops).

```css
body {
    font-size: 14px; /* Reduces the font size for smaller screens */
}

img {
    max-width: 100%; /* Ensures images fit within their containers */
    height: auto; /* Maintains the aspect ratio of images */
}
```

### Media Query: `@media (max-width: 480px)`
This query applies styles for screens with a width of **480px or smaller** (typically mobile phones).

```css
header, footer {
    padding: 0.5rem 0; /* Reduces the padding in the header and footer for compact screens */
}
```

---

## Key Points:
1. **Base Styles**: Define the default appearance for elements like `body`, `header`, `main`, and `footer`.
2. **Responsive Adjustments**: 
   - `@media (max-width: 768px)`: Targets medium-sized screens and adjusts font size and image scaling.
   - `@media (max-width: 480px)`: Targets smaller screens (e.g., phones) and reduces padding for compact elements.

By combining these styles, the web page maintains a clean and user-friendly design across all devices.
```