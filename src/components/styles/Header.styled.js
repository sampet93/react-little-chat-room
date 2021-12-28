import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
  h1 {
    font-size: 1.75em;
    padding: 0.25em 0.5em;
    margin: 0;
    color: ${({ theme }) => theme.colors.fontLight};
  }
`;
