import {createGlobalStyle} from "styled-components";

// SFProDisplay
// import SFProDisplay;

const GlobalStyles = createGlobalStyle`

  :root {
    --color-gray-header: #2B2B2B;
    --color-gray-bg-one: #343434;
    --color-gray-bg-two: #313131;
    --color-gray-bg-three: #494949;
    --color-gray-border-one: #3b3b3b;
    --color-gray-border-two: #4b4b4b;
    --color-gray-send: #5f5f5f;
    --color-gray-name: #707070;
    --color-gray-title: #7a7a7a;
    --color-gray-text: #9f9f9f;

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
    font-family: Roboto, sans-serif;
    font-size: var(--text-md);
    text-rendering: optimizeSpeed;
    line-height: 1.2;
    background-color: var(--color-gray-bg-one);
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
