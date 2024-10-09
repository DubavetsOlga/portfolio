import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /*outline: 1px solid red;*/
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        min-width: 360px;
    }

    input, button, textarea {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    section {
        padding: 120px 0;


        @media ${theme.media.mobile} {
            padding: 60px 0;
        }
    }

    h3 {
        font-size: 32px;
        font-weight: 400;
    }
`;
