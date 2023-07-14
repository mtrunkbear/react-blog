import { useState } from "react";
import styled from "@emotion/styled";
import { useUserContext } from "../context/userContext";
import { PostButton } from "../components/Buttons";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import { Input } from "@chakra-ui/react";
import { Container } from "../components/Container";

import { createPost } from "../api/postsAPI";
import { device } from "../styles/device";

export default function NewPost() {
  const { user } = useUserContext();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const onInputChange = (e: any) => {
    const newValue = e.currentTarget.value;
    setText(newValue);
    // setText(newValue)
  };

  return (
    <NewPostContainer>
      <Title style={{ marginBottom: "16px" }}>Crear un nuevo Post</Title>
      <Input
        width={"80%"}
        mb={5}
        bg={"black"}
        focusBorderColor={"green.300"}
        placeholder="Titulo"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div style={{ width: "100%" }}>
        <MDEditor height={600} value={text} onChange={setText} />
      </div>

      <PostButton
        style={{
          position: "relative",
          fontSize: 36,
          width: "99.9%",
          marginTop: "16px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
        onClick={() => createPost({ title, user, content: text })}
      >
        {"Publicar"}
      </PostButton>
    </NewPostContainer>
  );
}

const NewPostContainer = styled(Container)`
  margin: 0;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 90vw;
  height: 800px;
  font-family: "Lato", sans-serif;
  @media ${device.laptop} {
    width: 70vw;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
`;
