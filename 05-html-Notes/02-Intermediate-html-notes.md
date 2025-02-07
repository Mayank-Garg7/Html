
# Intermediate HTML Notes  

This document is designed to help you move beyond the basics and learn intermediate-level HTML concepts. By the end, you’ll be able to create more advanced and functional web pages.  

## Topics Covered  

### 1. **Adding Audio and Video to Your Web Pages**  
Now you can include multimedia like music and videos on your website!  

#### **Adding Audio**:  
- Use the `<audio>` tag to add sound to your page.  
- Important attributes:  
  - `controls`: Adds play, pause, and volume options.  
  - `autoplay`: Plays the audio automatically when the page loads.  
  - `loop`: Plays the audio on repeat.  
  - `muted`: Starts the audio in a muted state.  

**Example (Audio):**  
```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### **Adding Videos**:  
- Use the `<video>` tag to show videos on your webpage.  
- Similar attributes to the `<audio>` tag, like `controls`, `autoplay`, `loop`, and `muted`.  

**Example (Video):**  
```html
<video controls width="400">
  <source src="video-file.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### **Why Use `<source>` Tags?**  
They allow you to provide different file formats for better browser compatibility.

---

### 2. **Working with Forms**  
Forms are an essential part of creating interactive websites where users can input data.  

#### **How to Create a Form**:  
- Use the `<form>` tag to start a form.  
- Add inputs like text boxes, buttons, and dropdowns using `<input>` and other elements.  

#### **Common Input Types**:  
- **`text`**: For single-line text input.  
- **`password`**: Masks input for passwords.  
- **`email`**: Ensures the user enters a valid email.  
- **`file`**: Lets users upload files.  

#### **Organizing Forms**:  
- **`<label>`**: Describes the purpose of an input field.  
- **`<fieldset>`**: Groups related inputs.  
- **`<legend>`**: Provides a title for a group of fields.  

#### **Adding Buttons**:  
- Use `<button>` to create clickable buttons for submitting or resetting forms.  

#### **HTML5 Form Validation**:  
Add attributes like `required` to make sure users fill out necessary fields, or `pattern` to define a specific format (e.g., phone numbers).  

**Example:**  
```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <button type="submit">Submit</button>
</form>
```

---

### 3. **Making Your Web Pages Responsive**  
Responsive design makes your website look good on all devices, from phones to large screens.  

#### **Setting Up the Viewport**:  
Use the `<meta>` tag in the `<head>` to control the layout on different screen sizes:  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### **Why Responsive Design Matters**:  
It ensures your website is user-friendly and adapts to different devices.  

#### **Flexible Units**:  
Use scalable CSS units like:  
- **`%`**: A percentage of the parent element.  
- **`em`**: Relative to the font size of the element’s parent.  
- **`rem`**: Relative to the root font size (usually `<html>`).  

#### **Media Queries**:  
Add CSS rules for specific screen sizes to change the layout.  

**Example:**  
```html
<style>
  body {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    body {
      font-size: 12px;
    }
  }
</style>
```

---

### 4. **Using Semantic HTML Tags**  
Semantic HTML helps structure your page more meaningfully, making it easier to understand for both developers and search engines.  

#### **What Are Semantic Tags?**  
These tags describe the purpose of the content they contain:  
- **`<header>`**: For the top section, like a page title or logo.  
- **`<footer>`**: For the bottom section, like contact info or copyright.  
- **`<article>`**: For standalone content, like blog posts.  
- **`<section>`**: For grouping related content.  
- **`<aside>`**: For sidebars or additional info.  
- **`<main>`**: For the main content of the page.  

#### **Benefits of Semantic HTML**:  
- Makes your code easier to read.  
- Improves accessibility for people using screen readers.  
- Helps search engines understand your content better.  

**Example:**  
```html
<header>
  <h1>Welcome to My Blog</h1>
</header>
<main>
  <article>
    <h2>My First Post</h2>
    <p>This is an article about learning HTML.</p>
  </article>
</main>
<footer>
  <p>&copy; 2025 My Blog</p>
</footer>
```

---

### 5. **Using CSS with HTML**  
CSS makes your webpage look attractive and professional.  

#### **Ways to Add CSS**:  
1. **Inline CSS**: Add styles directly inside a tag with the `style` attribute.  
   ```html
   <p style="color: blue;">This text is blue.</p>
   ```
2. **Internal CSS**: Add styles inside a `<style>` tag in the `<head>`.  
   ```html
   <style>
     body {
       background-color: lightgray;
     }
   </style>
   ```
3. **External CSS**: Link to an external stylesheet for reusable styles.  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

#### **Classes and IDs**:  
- **Class**: Used to style multiple elements.  
  ```html
  <div class="box">This is styled with a class.</div>
  ```
- **ID**: Used to style a specific element.  
  ```html
  <div id="unique-box">This is styled with an ID.</div>
  ```

---

### Summary  
These topics will help you build web pages that are more interactive, visually appealing, and accessible. Practice these examples to fully understand each concept and take the next step in your web development journey!  

--- 
