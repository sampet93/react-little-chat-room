import styled, { keyframes } from "styled-components";

export const StyledChatRoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border: none 0.25rem ${({ theme }) => theme.colors.border};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.chatRoom};
  width: 400px;
  height: 400px;
  gap: 0.5rem;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column-reverse;
  padding: 5px;
  width: 100%;
  border: none 0.1rem ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.chatArea};
  overflow-y: auto;
`;

export const ChatInputArea = styled.div`
  display: flex;
  border: solid 0.1rem ${({ theme }) => theme.colors.border};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.messagebox};
  padding: 5px;
  width: 100%;
`;

export const ChatInputText = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1.0em",
  spellCheck: "false",
}))`
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.fontDark};
  background: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.25em;
  font-family: "Patrick Hand", cursive;
`;
