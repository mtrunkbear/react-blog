import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useUserContext } from "../context/UserContext";
import { PostButton } from "../components/Buttons";
import MDEditor from "@uiw/react-md-editor";
import { Input, Spinner } from "@chakra-ui/react";
import { Container } from "../components/Container";

import { createPost } from "../api/postsAPI";
import { device } from "../styles/device";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAlertContext } from "../context/AlertContext";
import { useNavigate } from "react-router";

export default function NewPost() {
  const navigate = useNavigate();
  const { showAlert } = useAlertContext();
  const { handleLogin } = useAuthentication();
  const { user }: any = useUserContext();
  const [title, setTitle]: any = useState();
  const [text, setText] = useState();

  useEffect(() => {
    if (!user.id) {
      handleLogin();
    }
  }, [user]);

  const handleCreatePost = async () => {
    const data: any = await createPost({ title, user, content: text });
    if (data) {
      showAlert("Post creado con exito!", "success");
     navigate( "/post/" + data?.id);
    } else {
      showAlert(
        "Ups hubo un error al crear su post, porfavor intente mas tarde...",
        "error"
      );
    }
  };

  if (user.id)
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
          <MDEditor height={600} value={text} onChange={setText as any} />
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
          onClick={handleCreatePost}
        >
          {"Publicar"}
        </PostButton>
      </NewPostContainer>
    );
  else
    return (
      <Spinner
        thickness="6px"
        marginTop="50 %"
        speed="0.65s"
        emptyColor="gray.700"
        color="purple.500"
        height={20}
        width={20}
      />
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
