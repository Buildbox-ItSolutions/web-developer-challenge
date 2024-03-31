"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --bg-header: var(--black-four);
        --title-header: var(--dark-lime-green);
        --subtitle-header: var(--warm-grey);
        --bg-primary: var(--black);

        --warm-grey: #707070;
        --dark-lime-green: #71bb00;
        --warm-grey-two: #7a7a7a;
        --brownish-orange: #d65923;
        --black-four: #232323;
        --greyish-brown-three: #4b4b4b;
        --white: #fff;
        --black: #343434;
        --greyish-brown: #494949;
        --black-two: #313131;
    }

    @font-face {
        font-family: "SFProDisplay";
        src: url("/fonts/SF-Pro-Display-Black.otf");
    }

    @font-face {
        font-family: "SFProDisplayLight";
        src: url("/fonts/SF-Pro-Display-Light.otf");
    }

    * {
        margin: 0;
    }

`;
