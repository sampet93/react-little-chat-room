import { useState, useEffect } from "react";
import { OuterCircle, InnerCircle } from "./styles/LoadingCircle.styled";
import { Input } from "./styles/Input.styled";

export default function LoadingCircle(props) {
  const minNicknameChars = 2;
  const maxNicknameChars = 15;

  // Store the nickname
  const [nickname, setNickname] = useState("");

  //Control the loading state
  const [loading, setLoading] = useState(true);

  const handleEnter = (event) => {
    if (event.key === "Enter" && !loading) {
      props.handleJoinChat(nickname);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <OuterCircle size="50px" expandSize="300px" padding="5px" loading={loading}>
      {loading ? (
        <InnerCircle />
      ) : (
        <Input
          placeholder="Nickname"
          onChange={(event) => setNickname(event.target.value)}
          onKeyPress={handleEnter}
          minLength={minNicknameChars}
          maxLength={maxNicknameChars}
        />
      )}
    </OuterCircle>
  );
}
