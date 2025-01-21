# Beginner HTML Notes  

This document is for anyone starting with HTML. It explains the basics in a simple and easy-to-follow way, helping you build a solid foundation for creating websites.  

## Topics Covered  

### 1. **Basic HTML Structure**  
Every HTML document has three main parts:  
- **`<html>`**: The main container for the webpage.  
- **`<head>`**: This section holds important information like the title of the page, styles, and links to external files.  
- **`<body>`**: This is where all the visible content of your webpage goes, like text, images, and links.  

You also need to add a **DOCTYPE declaration** (`<!DOCTYPE html>`) at the top of your file to tell the browser you're using the latest version of HTML.  

**Example:**  
```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is where you add content!</p>
</body>
</html>
```

---

### 2. **Commonly Used Tags**  
HTML uses tags to format content. Here are some basic ones:  
- **Headings**: Tags like `<h1>` to `<h6>` are used for titles and subtitles. `<h1>` is the largest, and `<h6>` is the smallest.  
- **Paragraphs**: Use `<p>` for writing text in paragraphs.  
- **Line Breaks**: Add a new line with `<br>` without starting a new paragraph.  
- **Horizontal Lines**: Use `<hr>` to insert a line that separates sections.  

**Example:**  
```html
<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<hr>
<p>Another paragraph with a <br> line break.</p>
```

---

### 3. **Introduction to Attributes**  
Attributes give extra information to tags to change their behavior or appearance.  
- **How Attributes Work**: They are written inside a tag in `attribute="value"` format.  
  - Example: `<p id="intro">Hello!</p>`  
- **Common Attributes**:  
  - **`id`**: Assigns a unique name to an element.  
  - **`class`**: Groups elements for styling.  
  - **`style`**: Adds custom styles directly.  
- **Global Attributes**: Attributes like `id`, `class`, and `style` work with almost any tag.  

---

### 4. **Basic Text Formatting**  
HTML has tags to make your text look better:  
- **Bold**: `<b>Bold Text</b>`  
- **Italic**: `<i>Italic Text</i>`  
- **Underline**: `<u>Underlined Text</u>`  
- **Superscript**: `<sup>` for small text above the line (e.g., H<sup>2</sup>O).  
- **Subscript**: `<sub>` for small text below the line (e.g., CO<sub>2</sub>).  
- **Highlighting**: `<mark>` to highlight important text.  

**Example:**  
```html
<p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u>.</p>
<p>Water: H<sup>2</sup>O, Carbon dioxide: CO<sub>2</sub></p>
<p><mark>Important!</mark></p>
```

---

### 5. **Adding Images and Links**  
HTML lets you add images and links to your pages:  

#### Adding Images:  
- Use the `<img>` tag to add an image.  
- Important attributes:  
  - `src`: The image file path.  
  - `alt`: Describes the image if it doesn’t load.  
- Example:  
  ```html
  <img src="logo.png" alt="Website Logo" width="200" height="100">
  ```

#### Adding Links:  
- Use the `<a>` tag to create a clickable link.  
- Important attributes:  
  - `href`: The link destination (e.g., a website or file).  
  - `title`: Text shown when you hover over the link.  
- Example:  
  ```html
  <a href="https://example.com" title="Visit Example Website">Click Here</a>
  ```

#### Paths for Images and Links:  
- **Relative Path**: Points to files in the same folder (e.g., `images/photo.jpg`).  
- **Absolute Path**: Points to a full URL (e.g., `https://example.com/photo.jpg`).  

---

### Summary:  
These notes cover the basics of HTML to help you get started. Practice writing these examples in your own HTML files to understand how they work. Once you feel comfortable with these, you’ll be ready to move on to more advanced topics!  

--- 
able with these, you’ll be ready to move on to more advanced topics!  

--- 

