import { CircleButton, LinkStyle } from "./Buttons";
import { useNavigate } from "react-router";
import avatar from "../assets/avatar.png";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import styled from "@emotion/styled";
import mail from "../assets/mail.svg";
import { device, size as windowSizes } from "../styles/device";
import { useColorMode } from "@chakra-ui/react";
import useWindowPosition from "../hooks/useWindowPosition";

const AutorDetail = ({
  nickName,
  firstName,
  lastName,
  occupation,
  description,
  id,
  avatarUrl,
}: any) => {
  const { viewportWidth } = useWindowPosition();
  const isMobile = viewportWidth <= parseFloat(windowSizes.laptop);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navigate = useNavigate();

  return id ? (
    <AutorStyle
      style={{
        backgroundColor: isDark
          ? isMobile
            ? "rgba(82, 5, 133, 0.1)"
            : "rgba(82, 5, 133, 0.4)"
          : "rgba(82, 109, 130,0.8)",
      }}
    >
      <ProfileContainer>
        <MailIconContainer>
          <img width={20} src={mail} />
        </MailIconContainer>
        <CircleButton
          onClick={() => navigate("/@" + nickName)}
          image={avatarUrl || avatar}
          size={isMobile ? 30 : 80}
        />
        <div>
          {!isMobile && (
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
          )}
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
          <p
            style={{ fontSize: "12px", fontWeight: 200, textAlign: "justify" }}
          >
            {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          autem recusandae accusamus alias tempore enim cupiditate consequuntur */}
            {description?.slice(0, 180)}
          </p>
        </div>
      </ProfileContainer>

      <SocialMedia />
    </AutorStyle>
  ) : (
    <>"Cargando..."</>
  );
};

const MailIconContainer = styled.div`
  display: none;
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
  flex-direction: column;
  height: 370px;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 5px;

  box-sizing: border-box;
  @media ${device.mobileS} {
    width: 100%;
    height: 200px;
    border-radius: 20px 20px 0 0;
    border-style: none none none none;
  }
  @media ${device.laptop} {
    width: 96%;
    height: 370px;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 12px 13px 16px 2px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 1);

    border-radius: 32px;
  }
`;
const ProfileContainer = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: row;
    height: 150px;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 90%;
    margin-top: 10px;
  }
  @media ${device.laptop} {
    flex-direction: column;
    magin-top: 0;
    align-items: center;
    height: 80%;
  }
`;

export default AutorDetail;
