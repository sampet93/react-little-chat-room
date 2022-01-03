import { useState, useEffect } from "react";
import {
  StyledChatRoom,
  ChatArea,
  ChatInputArea,
  ChatInputText,
} from "./styles/ChatRoom.styled";
import Message from "./Message";
import { db } from "../firebase.config";
import { ref, child, get, set } from "firebase/database";

export default function ChatRoom(props) {
  const maxMessageChars = 240;
  // Control the message state
  const [message, setMessage] = useState("");
  // Messages from the server
  const [messages, setMessages] = useState([]);

  // Get messages
  const getMessages = async () => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `messages/`));

      if (snapshot.exists()) {
        const messageObjects = [];
        snapshot.val().forEach((snapshotMessage, index) => {
          const newMessage = (
            <Message
              key={index}
              nickname={snapshotMessage.nickname}
              text={snapshotMessage.message}
              date={snapshotMessage.time}
              admin={snapshot.admin}
            />
          );
          messageObjects.unshift(newMessage);
        });

        setMessages(messageObjects);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (message, time) => {
    const latestId = await getLatestMessageId();

    set(ref(db, "messages/" + latestId), {
      admin: false,
      id: latestId,
      message: message,
      nickname: props.nickname,
      time: time,
    });

    // Get updated messages from server
    await getMessages();

    setMessage("");
  };

  const getLatestMessageId = async () => {
    let newMessageId = 0;
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `messages/`));

      if (snapshot.exists()) {
        newMessageId = snapshot.val()[snapshot.val().length - 1].id + 1;
      }
    } catch (error) {
      console.log(error);
    }
    return newMessageId;
  };

  // Get the current date string "DD.MM.YYYY"
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.length > 0) {
        sendMessage(message, getCurrentDate());
      }
    }
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
