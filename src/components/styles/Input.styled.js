import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  font-weight: bold;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.5em;
  background: none;
  border: none;
  padding: 0 20px;
`;
