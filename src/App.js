import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import LoadingCircle from "./components/LoadingCircle";
import ChatRoom from "./components/ChatRoom";
import theme from "./components/styles/Theme";

function App() {
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [nickname, setNickname] = useState("");

  const joinChatRoom = (nickname) => {
    setNickname(nickname);
    setShowChatRoom(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {showChatRoom ? (
            <ChatRoom nickname={nickname} />
          ) : (
            <LoadingCircle handleJoinChat={joinChatRoom} />
          )}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
