import { useState, useEffect } from "react";
import {
  StyledChatRoom,
  ChatArea,
  ChatInputArea,
  ChatInputText,
} from "./styles/ChatRoom.styled";
import Message from "./Message";

export default function ChatRoom(props) {
  const maxMessageChars = 240;

  // Control the message state
  const [message, setMessage] = useState("");
  // Messages from the server
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, []);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.length > 0) {
        sendMessage(message);
      }
    }
  };

  const sendMessage = (message) => {
    // TODO: SendMessage, server

    // Placeholder clientsided messaging
    let currentMessages = messages;
    currentMessages.unshift(
      <Message
        nickname={props.nickname}
        text={message}
        date={getCurrentDate()}
      />
    );

    setMessages(currentMessages);

    setMessage("");
  };

  // Get the current date string "DD.MM.YYYY"
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  };

  return (
    <StyledChatRoom>
      <ChatArea>{messages}</ChatArea>
      <ChatInputArea>
        <ChatInputText
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={handleEnter}
          maxLength={maxMessageChars}
        />
      </ChatInputArea>
    </StyledChatRoom>
  );
}
