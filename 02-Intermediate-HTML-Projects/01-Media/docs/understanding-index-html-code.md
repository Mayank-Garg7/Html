### Media in HTML

HTML supports embedding media elements such as images, audio, and video. Here's a breakdown of the main tags and attributes:

1. `<img>` - Used to add images.
   - Attributes:
     - `src`: Path to the image file.
     - `alt`: Alternate text for the image.
     - `width` / `height`: Dimensions of the image.

2. `<audio>` - Used to embed audio.
   - Attributes:
     - `controls`: Adds playback controls.
     - `autoplay`: Automatically starts playback.
     - `loop`: Loops the audio.
     - `<source>`: Specifies the audio file and format.

3. `<video>` - Used to embed videos.
   - Attributes:
     - `controls`: Adds playback controls.
     - `autoplay`: Automatically starts playback.
     - `loop`: Loops the video.
     - `<source>`: Specifies the video file and format.

### Notes
- Always use the `alt` attribute for images for better accessibility.
- Test media files in different browsers to ensure compatibility.
- Use relative paths for file references in the `src` attribute.
