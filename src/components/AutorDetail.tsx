import { CircleButton, LinkStyle } from "./Buttons";
import avatar from "../assets/avatar.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import styled from "styled-components";
import mail from "../assets/mail.svg";
import { device } from "../styles/device";

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

  @media ${device.mobileS} {
    height: 200px;
    flex-direction: row;
   
  }
  @media ${device.laptop} {
    height: 370px;
    flex-direction: column;
   
  }
`;
const AutorDetail = () => {
  return (
    <AutorStyle>
      <div
        style={{
          display: "flex",
          height: "25px",
          width: "100%",
          marginBottom: "-25px",
          paddingRight: "10px",
          justifyContent: "flex-end",
        }}
      >
        <img width={20} src={mail} />
      </div>

      <CircleButton image={avatar} size={80} />
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
        >
          {"<MiguelTroncoso/>"}
        </h3>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "left",
            marginBottom: 0,
            marginLeft: 10,
            height: 10,
          }}
        >
          Fullstack Developer
        </p>
        <p style={{ fontSize: "12px", fontWeight: 200, textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          autem recusandae accusamus alias tempore enim cupiditate consequuntur
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        <SocialMedia />
      </div>
    </AutorStyle>
  );
};

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
  return (
    <>
      {socialMedia.map(({ link, name, icon }) => (
        <RRSSLink link={link} name={name} icon={icon} />
      ))}
    </>
  );
};

export default AutorDetail;
