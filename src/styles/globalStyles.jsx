// styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        font-family: 'Cairo', sans-serif;
    } 
    .container {
        margin: auto;
        width: 100%;        
        text-align: center;
        
    }

    .limitWidth {
        max-width: 80%;
        text-align: center;
        margin: auto;
        margin-top: 10%;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
`;
