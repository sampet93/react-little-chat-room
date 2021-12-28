import styled from "styled-components";

export const StyledMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: flex-start;
  flex-flow: column;
  justify-content: center;
  background-color: white;
  margin: 2px 0px;
  padding: 5px;
  max-width: 600px;
  border-radius: 5px;
  p {
    margin: 0;
  }
`;

export const MessageTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  max-height: 2rem;
  width: 100%;
`;
export const MessageBottomRow = styled.div`
  flex: 1 1 100%;
  word-wrap: normal;
  word-break: break-all;
`;

export const MessageNicknameDiv = styled.div`
  margin-right: 1rem;
  p {
    font-size: 0.75em;
    color: ${({ theme }) => theme.colors.fontDark};
  }
`;

export const MessageTimeDiv = styled.div`
  p {
    font-size: 0.75em;
    color: ${({ theme }) => theme.colors.fontDark};
  }
`;

export const MessageText = styled.div`
  display: block;
  min-height: 0;
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.fontDark};
`;
