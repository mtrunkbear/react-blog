import { useState } from "react";
import styled from "@emotion/styled";
import { useUserContext } from "../context/userContext";
import { PostButton } from "./Buttons";
import MDEditor, { selectWord } from "@uiw/react-md-editor";

import { createPost } from "../api/postsAPI";

export function MarkdownInput() {
  const { user } = useUserContext();
  const [text, setText] = useState();

  const onInputChange = (e: any) => {
    const newValue = e.currentTarget.value;
    setText(newValue);
    // setText(newValue)
  };

  return (
    <Container>
      <Title>Markdown Text</Title>
      {/*   <TextArea onChange={onInputChange} /> */}
      <div style={{ width: "100%" }}>
        <MDEditor
          height={600}
          /* style={{margin:0, width: "100vw"}} */ value={text}
          onChange={setText}
        />
      </div>

      <PostButton style={{ position: "relative" }} onClick={()=>createPost({title:"New Post",user,content:text})}>
        {"Publicar"}
      </PostButton>
    </Container>
  );
}
const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: 800px;
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
