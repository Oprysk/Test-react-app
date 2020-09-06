import { createGlobalStyle } from "styled-components";
import "../../assets/styles.css";

export const GlobalStyle = createGlobalStyle`
  body, button, input, textarea {
    margin: 0;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: #F3F3F9;
    color: #262626;
  }

  input[type=text]::-ms-clear {
    display: none;
  }
  
  button {
    padding: 0;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  #modal-root {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 5;
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
