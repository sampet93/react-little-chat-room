import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
        background: ${({ theme }) => theme.colors.body};
        font-family: 'Scada', sans-serif;
    }
`;

export default GlobalStyles;
