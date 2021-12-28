import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
        background: ${({ theme }) => theme.colors.body};
        font-family: 'Patrick Hand', cursive;
    }
`;

export default GlobalStyles;
