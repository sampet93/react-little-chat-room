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

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>{showChatRoom ? <ChatRoom /> : <LoadingCircle />}</Container>
      </>
    </ThemeProvider>
  );
}

export default App;
