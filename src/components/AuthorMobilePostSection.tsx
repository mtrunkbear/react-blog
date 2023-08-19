import { useNavigate } from "react-router";
import avatar from "../assets/avatar.png";
import { CircleButton } from "./Buttons";
import styled from "@emotion/styled";
import { useUserContext } from "../context/UserContext";

const AuthorMobileDetail = ({ userId }: any) => {
  const { users }: any = useUserContext();
  const author = users?.find((user:any) => user.id === userId);
  const navigate = useNavigate();

  if (author){
    return (
      <AuthorMobileDetailContainer>
        <CircleButton
          onClick={() => navigate("/@" + author?.nickName)}
          image={avatar}
          size={16}
        />
        <p style={{fontSize:"12px"}}>{author?.nickName}</p>
      </AuthorMobileDetailContainer>
    );
  } else {return(<></>)}
};

const AuthorMobileDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  margin-bottom: 5px;
`;
export default AuthorMobileDetail;
