import { css } from 'styled-components';

const variables = css`
    :root{
        //Cores
        --nav: #2b2b2b;

        --bg: #343434;

        --box: #313131;

        --input-text: #ffffff;
        --text: #9f9f9f;
        --sub-text: #7a7a7a;

        --textarea: #494949;

        --button: #5f5f5f;


        //Fonte
        --font-sans: 'Roboto', sans-serif;


        //Font Size
        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;


        --border: solid 1px #3b3b3b;
        --border-radius: 3px;
        --nav-height: 93px;


        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`

export default variables;