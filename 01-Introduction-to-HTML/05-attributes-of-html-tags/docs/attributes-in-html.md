# Attributes in HTML

Attributes provide additional information about HTML elements. They are always specified in the opening tag of an element and come in name-value pairs. The value is often enclosed in quotation marks.

## Types of HTML Attributes

1. **Global Attributes**: These attributes can be applied to any HTML element. Examples include `id`, `class`, `style`, etc.
2. **Element-specific Attributes**: These attributes are specific to certain HTML elements. For example, the `src` attribute for the `<img>` tag, or the `href` attribute for the `<a>` tag.

## Common HTML Attributes with Examples

### 1. `id` Attribute
- The `id` attribute is used to uniquely identify an element within a page.
- Example:
    ```html
    <div id="header">Welcome to My Website</div>
    ```

### 2. `class` Attribute
- The `class` attribute is used to apply CSS styles to elements or to group elements together.
- Example:
    ```html
    <p class="intro">This is an introduction paragraph.</p>
    ```

### 3. `src` Attribute
- The `src` attribute specifies the source file for an image or other media element.
- Example:
    ```html
    <img src="logo.png" alt="Website Logo">
    ```

### 4. `href` Attribute
- The `href` attribute is used to define the destination URL of a hyperlink.
- Example:
    ```html
    <a href="https://www.example.com">Visit Example Website</a>
    ```

### 5. `alt` Attribute
- The `alt` attribute provides alternative text for an image if it cannot be displayed.
- Example:
    ```html
    <img src="image.jpg" alt="Description of the image">
    ```

### 6. `style` Attribute
- The `style` attribute is used to apply inline CSS to an element.
- Example:
    ```html
    <p style="color: blue; font-size: 16px;">This is a styled paragraph.</p>
    ```

### 7. `target` Attribute
- The `target` attribute specifies how a link should open. Common values are `_blank` (new tab), `_self` (same tab), etc.
- Example:
    ```html
    <a href="https://www.example.com" target="_blank">Open in New Tab</a>
    ```

### 8. `width` and `height` Attributes
- The `width` and `height` attributes specify the dimensions of an element, such as an image or video.
- Example:
    ```html
    <img src="photo.jpg" alt="Sample Image" width="300" height="200">
    ```

### 9. `placeholder` Attribute
- The `placeholder` attribute is used in `<input>` and `<textarea>` elements to provide a short hint or text inside the field.
- Example:
    ```html
    <input type="text" placeholder="Enter your name">
    ```

### 10. `type` Attribute
- The `type` attribute defines the type of an input element, such as `text`, `password`, `email`, etc.
- Example:
    ```html
    <input type="email" placeholder="Enter your email">
    ```

### 11. `disabled` Attribute
- The `disabled` attribute disables an element, preventing the user from interacting with it.
- Example:
    ```html
    <button disabled>Submit</button>
    ```

### 12. `readonly` Attribute
- The `readonly` attribute makes an input field non-editable but still visible.
- Example:
    ```html
    <input type="text" value="This is readonly" readonly>
    ```

## Example of HTML Elements with Multiple Attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Attributes Example</title>
</head>
<body>
    <h1>HTML Elements with Attributes</h1>

    <!-- Image with src, alt, width, and height attributes -->
    <img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150">

    <!-- Anchor tag with href and target attributes -->
    <a href="https://www.example.com" target="_blank">Visit Example Website</a>

    <!-- Input field with placeholder and type attributes -->
    <input type="text" placeholder="Enter your name" class="input-field">

    <!-- Button with disabled attribute -->
    <button disabled>Cannot Click</button>

    <!-- Paragraph with a class and style attributes -->
    <p class="description" style="color: green;">This is a styled paragraph with a class.</p>
</body>
</html>
