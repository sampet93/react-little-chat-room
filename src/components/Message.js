import {
  StyledMessage,
  MessageNicknameDiv,
  MessageText,
  MessageTimeDiv,
  MessageTopRow,
  MessageBottomRow,
} from "./styles/Message.styled";
export default function Message(props) {
  return (
    <StyledMessage>
      <MessageTopRow>
        <MessageNicknameDiv>
          <p>{props.nickname}</p>
        </MessageNicknameDiv>
        <MessageTimeDiv>
          <p> {props.date}</p>
        </MessageTimeDiv>
      </MessageTopRow>
      <MessageBottomRow>
        <MessageText>{props.text}</MessageText>
      </MessageBottomRow>
    </StyledMessage>
  );
}
