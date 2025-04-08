# Amalitech lab- News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

- Implementing a responsive navigation bar that adapts to different screen sizes.
- Using CSS Flexbox for layout and alignment.
- Creating a mobile menu that toggles on and off using JavaScript.
- Applying hover and focus states to interactive elements for better user experience.
- Styling the page using CSS custom properties for maintainability.

```html
<header class="navbar">
  <div class="logo">
    <img src="./assets/images/logo.svg" alt="logo">
  </div>
  <div class="menu-toggle" id="menuToggle">
    <img src="./assets/images/icon-menu.svg" alt="">
  </div>

  <nav class="desktop-menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">New</a></li>
      <li><a href="#">Popular</a></li>
      <li><a href="#">Trending</a></li>
      <li><a href="#">Categories</a></li>
    </ul>
  </nav>
</header>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--almost-white);
}

@media (min-width: 768px) {
  .desktop-menu ul li{
    display: inline;
  }
}
```

```javascript
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  overlay.classList.add('show');
});
```




### Continued development

- Improve accessibility by adding ARIA attributes and ensuring proper semantic HTML structure.
- Write unit tests to ensure the JavaScript functionality is robust.
- Explore CSS Grid for more complex layouts in future projects.
- Optimize CSS for better performance and maintainability.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io) - For providing the challenge and design specifications.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - For HTML, CSS, and JavaScript documentation and tutorials.
- [CSS-Tricks](https://css-tricks.com/) - For CSS layout techniques and best practices.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

[Add acknowledgments here]
