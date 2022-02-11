import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";

const GlobalStyles = createGlobalStyle`

:root {
  --color-gray-999: #232323;
  --color-gray-900: #2B2B2B;
  --color-gray-800: #313131;
  --color-gray-700: #343434;
  --color-gray-600: #3E3E3E;
  --color-gray-500: #494949;
  --color-gray-400: #5f5f5f;
  --color-gray-300: #7a7a7a;
  --color-gray-200: #9f9f9f;

  --primary-color: #71BB00;
  --primary-color-hover: #7fcc0a;
  --delete-color: #934929;

  --text-bg: 1rem;
  --text-md: .875rem;
  --text-sm: .75rem;
}


/* Box sizing rules, default margin and paddings removed. */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: var(--text-md);
  text-rendering: optimizeSpeed;
  line-height: 1.2;
  background-color: var(--color-gray-700);
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* setting min-height root */

#root {
  min-height: 100vh;
}

`;

export default GlobalStyles;
