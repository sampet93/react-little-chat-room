import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
  spellCheck: "false",
}))`
  font-weight: bold;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.5em;
  background: ${({ theme }) => theme.colors.chatArea};
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
