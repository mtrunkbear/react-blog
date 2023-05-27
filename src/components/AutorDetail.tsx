import { CircleButton, LinkStyle } from "./Buttons";
import { useNavigate } from "react-router";
import avatar from "../assets/avatar.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import styled from "@emotion/styled";
import mail from "../assets/mail.svg";
import { device } from "../styles/device";
import { useColorMode } from "@chakra-ui/react";

const AutorDetail = ({
  nickName,
  firstName,
  lastName,
  occupation,
  description,
  id,
}: any) => {
  const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  const navigate = useNavigate();

  return id ? (
    <AutorStyle style={{backgroundColor: isDark? "rgba(82, 5, 133, 0.4)" :"rgba(82, 109, 130,0.8)"}}>
      <AvatarContainer>
        <img width={20} src={mail} />
      </AvatarContainer>

      <CircleButton
        onClick={() => navigate("/@" + nickName)}
        image={avatar}
        size={80}
      />
      <div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 200,
            textAlign: "left",
            marginBottom: 0,
            marginLeft: 10,
            height: 15,
          }}
        >
          Hola! soy:
        </p>
        <h3
          style={{
            margin: 0,
            height: 12,
            fontWeight: "400",
            textAlign: "left",
            color: "rgba(84, 227, 70, 1)",
          }}
          onClick={() => navigate("/@" + nickName)}
        >
          {`<${firstName + lastName ? firstName + lastName : nickName}/>`}
        </h3>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "left",
            marginLeft: 10,
            height: "auto",
          }}
        >
          {occupation}
        </p>
        <p style={{ fontSize: "12px", fontWeight: 200, textAlign: "justify" }}>
          {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          autem recusandae accusamus alias tempore enim cupiditate consequuntur */}
          {description?.slice(0, 180)}
        </p>
      </div>

      <SocialMedia />
    </AutorStyle>
  ) : (
    <>"Cargando..."</>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  margin-bottom: -25px;
  padding-right: 10px;
  justify-content: flex-end;
`;

const SocialMedia = () => {
  const socialMedia = [
    {
      icon: githubIcon,
      name: "Github",
      link: "github.com",
    },
    {
      icon: linkedinIcon,
      name: "Linkedin",
      link: "github.com",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "90%",
      }}
    >
      {socialMedia.map(({ link, name, icon }) => (
        <RRSSLink key={name} link={link} name={name} icon={icon} />
      ))}
    </div>
  );
};
const RRSSLink = ({ icon, name, link }: any) => {
  return (
    <LinkStyle width={"40%"} href={link} filterColor={"violet"}>
      <img src={icon} style={{ margin: 0 }} />
      <p
        style={{
          width: "60%",
          fontSize: "12px",
          margin: "0",
        }}
      >
        {name}
      </p>
    </LinkStyle>
  );
};
const AutorStyle = styled.div`
  display: flex;
  border-radius: 32px;
  flex-direction: column;
  height: 370px;
  background-color: rgba(82, 5, 133, 0.4);
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 5px;
  box-sizing: border-box;
  justify-content: space-evenly;
  box-shadow: 12px 13px 16px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 1);
  width: 96%;

  @media ${device.mobileS} {
    height: 200px;
    flex-direction: row;
  }
  @media ${device.laptop} {
    height: 370px;
    flex-direction: column;
  }
`;

export default AutorDetail;
