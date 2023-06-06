import { useState } from "react";
import styled from "@emotion/styled";
import { useUserContext } from "../context/userContext";
import { PostButton } from "./Buttons";

const apiUrl = import.meta.env.VITE_API_URL;
export function MarkdownInput() {
  const { user } = useUserContext();
  const [text, setText] = useState();

  const handleNewPost = () => {
    if (user) {
      fetch(`${apiUrl}:4000/api/post/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title: "by mk",
          content: text,
          userId: user.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const onInputChange = (e: any) => {
    const newValue = e.currentTarget.value;
    setText(newValue);
    // setText(newValue)
  };

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={onInputChange} />
      <PostButton style={{position:"relative"}} onClick={() => handleNewPost()} />
    </Container>
  );
}
const Container = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  width: 100%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;
