import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme["gray-900"]};
    color: #fff;
}

body ,input, textarea, button {
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;
