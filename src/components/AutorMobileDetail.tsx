import { useNavigate } from "react-router";
import avatar from "../assets/avatar.jpg";
import { CircleButton } from "./Buttons";
import styled from "@emotion/styled";

const AuthorMobileDetail = ({ author }: any) => {
  const navigate = useNavigate();

  return (
    <AuthorMobileDetailContainer>
      <CircleButton
        onClick={() => navigate("/@" + author.nickName)}
        image={avatar}
        size={80}
      />
      <p>{author.nickName}</p>
    </AuthorMobileDetailContainer>
  );
};

const AuthorMobileDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;
export default AuthorMobileDetail;
