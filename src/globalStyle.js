import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Bebas Neue' , san-serif;
        text-decoration: none;
        list-style: none;
        letter-spacing: 1px;
    }

    body {
      overflow-x: hidden;
    }
`;

export default GlobalStyles;
