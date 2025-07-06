# DrumMaster 5000

A retro-style **finger drum machine** for your browser! This project gives you hands-on practice with **JavaScript event listeners** like `click`, `keydown`, `keyup`, `mouseover`, and more.

## Project Goal

The goal of **DrumMaster 5000** is to give you a fun and interactive way to learn how to handle different types of events in JavaScript. You will wire up buttons and drum pads to make sounds, light up, and react to user input!

By the end, you will understand:

- How to use `addEventListener()`
- How to respond to `click`, `keydown`, `keyup`, `mouseover`, and other DOM events
- How to play audio in the browser
- How to connect JavaScript logic to HTML elements

---

## Project Structure

drum-master-5000/
│
├── index.html // The main HTML layout
├── styles.css // Styling for layout and effects
├── scripts.js // Where YOU write the JavaScript!
└── assetsSounds/ // Folder for your sound effects

---

---

## 🚀 How to Start

1. Open `index.html` in your browser to see the layout.
2. Open `scripts.js` in your code editor.
3. Begin wiring up the interface with event listeners.

---

## 🕹️ What to Build

Here are some ideas and challenges to try:

### Starter Goals

- Add a `click` event to each `.drum` pad to play a unique sound.
- Add a `mouseover` event to the `.switch` buttons to change their color or play a beep.
- Add a `keydown` and `keyup` event for keys like `1–9` to trigger drum pads.

### Bonus Challenges

- Make the **Let Phil** button play a special sound or trigger a light show.
- Animate pads with class changes or CSS `transform` effects.
- Use the A/B/C/D switch modes to trigger different sets of sounds.
- Build a loop feature that replays your last drum combo.

---

## Sound Effects

Add your `.wav` or `.mp3` files to the `assetsSounds/` folder. You can use your own, or download free sounds from:

- [https://mixkit.co/free-sound-effects/](https://mixkit.co/free-sound-effects/)
- [https://freesound.org/](https://freesound.org/)

Make sure the file paths in your code match the filenames you place in that folder.

---

## Key Concepts

- `addEventListener()`
- `document.getElementById()` / `querySelector()`
- DOM element interaction
- Keyboard and mouse events
- Audio playback using `new Audio()`
