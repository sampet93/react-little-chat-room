import { useState, useEffect } from "react";
import { OuterCircle, InnerCircle } from "./styles/LoadingCircle.styled";
import { Input } from "./styles/Input.styled";

export default function LoadingCircle() {
  const minNicknameChars = 2;
  const maxNicknameChars = 15;

  //Control the loading state
  const [loading, setLoading] = useState(true);

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
          minLength={minNicknameChars}
          maxLength={maxNicknameChars}
        />
      )}
    </OuterCircle>
  );
}
