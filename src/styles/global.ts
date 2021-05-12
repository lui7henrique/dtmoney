import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  :root {
  --background: #121214;
  --shape:  #202024;

  --red: #E52E4D;
  --blue: #5429cc;
  --green: #33CC95;
  --blue-light: #6933ff;

  --text-title: #c9d1d9;
  --text-body: #c9d1d9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14 px
  }
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  padding: 3rem;
  background: var(--background);
  border-radius: 0.25rem;
  position: relative;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 200ms;

  &:hover{
    filter: brightness(0.7)
  }
}

`;
