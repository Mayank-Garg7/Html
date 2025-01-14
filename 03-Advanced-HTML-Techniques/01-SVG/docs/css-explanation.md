# CSS Styling for SVG Example Page

This CSS file provides styling for the SVG examples page, which includes styles for various elements like headers, paragraphs, SVGs, images, and hover effects. The layout is also responsive, meaning it adapts to different screen sizes.

## General Reset and Box Model

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- This is a universal reset applied to all elements. It removes the default margin and padding and ensures the box model behaves consistently. The `box-sizing: border-box` ensures that padding and border are included in the element's total width and height.

---

## Body and Font Styling

```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
}
```
- The `body` element is styled with a font-family of `Arial`, a sans-serif font, for a clean and modern look.
- The `line-height: 1.6` ensures the text has enough spacing between lines for better readability.
- The background color is set to a light gray (`#f9f9f9`) to give the page a neutral, soft feel.
- Text color is set to dark gray (`#333`) to maintain good contrast and readability.

---

## Header Styling

```css
h1 {
    text-align: center;
    margin-top: 20px;
    color: #4CAF50;
}
```
- The `h1` header is centered using `text-align: center`.
- It has a top margin of `20px` to provide space from the top of the page.
- The color of the header is set to a shade of green (`#4CAF50`), giving it prominence and a fresh look.

```css
h2 {
    margin-top: 30px;
    color: #555;
    text-align: center;
}
```
- The `h2` header is also centered.
- It has a `30px` top margin for better spacing between elements.
- The color of the header is set to a medium gray (`#555`), making it less prominent than the `h1` header.

---

## Paragraph Styling

```css
p {
    text-align: center;
    font-size: 1.1rem;
    margin: 10px 20px;
}
```
- The paragraphs are centered using `text-align: center`.
- The font size is set to `1.1rem` for slightly larger text than normal, enhancing readability.
- The margins are set to `10px` vertically and `20px` horizontally to add spacing around the paragraphs.

---

## SVG Styling

```css
svg {
    display: block;
    margin: 20px auto;
    border: 1px solid #ccc;
    max-width: 90%;
    padding: 15px;
    height: auto;
}
```
- The `svg` elements are set to `display: block`, which removes the default inline behavior, ensuring they occupy the full width available.
- `margin: 20px auto` centers the SVG horizontally and adds vertical margin of `20px`.
- A `1px solid #ccc` border is applied around the SVG for a soft outline.
- The `max-width: 90%` ensures the SVG scales responsively to fit the container, while maintaining its aspect ratio with `height: auto`.
- Padding is added for spacing inside the SVG container.

---

## Image Styling

```css
img {
    display: block;
    margin: 20px auto;
    max-width: 200px;
}
```
- The `img` elements are also set to `display: block`, ensuring they are treated as block-level elements and centered.
- The `margin: 20px auto` centers the image horizontally and adds vertical margin.
- The `max-width: 200px` ensures that the image does not exceed a width of 200px, keeping it appropriately sized.

---

## Hover Effects for Interactivity

```css
rect:hover, circle:hover, text:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}
```
- This rule adds a hover effect to the SVG elements (`<rect>`, `<circle>`, `<text>`).
- When hovered, the elements will scale up by `1.1` times their original size using the `transform: scale(1.1)` property.
- The `transition` property ensures the scaling effect happens smoothly over `0.3 seconds`.

---

## Styling for Animated SVG Elements

```css
circle {
    stroke: #000;
    stroke-width: 2;
}
```
- For all `<circle>` elements, a black stroke (`#000`) is applied with a width of `2px` to make the circle stand out.

---

## Responsive Layouts

### Media Query for Tablets (max-width: 768px)

```css
@media (max-width: 768px) {
    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }

    svg {
        max-width: 100%;
    }
}
```
- This media query targets devices with a screen width of 768px or less (typically tablets).
- The font sizes for `h1`, `h2`, and `p` are adjusted to fit better on smaller screens.
- The `svg` elements are set to have a `max-width: 100%`, ensuring they are fully responsive and adapt to the container width.

### Media Query for Mobile Devices (max-width: 480px)

```css
@media (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    p {
        font-size: 0.9rem;
    }
}
```
- This media query targets smaller devices (smartphones) with a screen width of 480px or less.
- The font sizes for `h1`, `h2`, and `p` are further reduced to ensure readability on small screens.

