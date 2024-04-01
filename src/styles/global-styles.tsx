"use client";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --bg-header: var(--black-four);
        --title-header: var(--dark-lime-green);
        --subtitle-header: var(--warm-grey);
        --bg-primary: var(--black);
        --bg-input: var(--greyish-brown);
        --bg-btn-disable: var(--black-two);

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
        --brownish-grey:#5f5f5f;
    }

    * {
        margin: 0;
    }
    
    input,button{
        all: unset;
    }
    
    textarea,textarea:focus-visible,textarea:focus-visible{
        border:none;
        outline: none;
        resize:none;
    }

`;
