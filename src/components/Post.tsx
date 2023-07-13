import SyntaxHighlighter from "react-syntax-highlighter";
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useRef, forwardRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import guardar from "../assets/guardar.svg";

import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import useNearestElement from "../hooks/useNearestElement";
import { PostButton } from "./Buttons";
import { device, size as windowSizes } from "../styles/device";
import useWindowPosition from "../hooks/useWindowPosition";
import { useFocusedPostContext } from "../context/focusedPostContext";
import { useColorMode } from "@chakra-ui/react";
import AuthorMobilePostSection from "./AuthorMobilePostSection";
import useScrollRestorarion from "../hooks/useScrollRestoration";

const Post = ({
  title,
  content,
  style,
  id,
  userId,
  isFullView = false,
  firstPost,
}: any) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [focusedPost, setFocusedPost]: any = useFocusedPostContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useScrollRestorarion(pathname);
  const postRef = useRef<any>(null);
  const isNearest: any = useNearestElement(postRef);
  const { viewportWidth } = useWindowPosition();
  const isMobile = viewportWidth <= parseFloat(windowSizes.laptop);

  useEffect(() => {
    if (!focusedPost?.id) {
      setFocusedPost(firstPost);
    }
    if (isNearest) {
      setFocusedPost({ title, content, style, id, userId });
    }
  }, [isNearest, firstPost]);

  const hasImage = content.slice(0, 200).includes("[image]");

  const MAX_MOBILE_CONTENT_LENGTH = 100;
  const MAX_DESKTOP_CONTENT_LENGTH = 250;

  const truncatedContent = content.slice(
    0,
    isMobile ? MAX_MOBILE_CONTENT_LENGTH : MAX_DESKTOP_CONTENT_LENGTH
  );

  const truncatedWithImage = hasImage
    ? content.split("[image]")[0] +
      "[image]" +
      content.split("[image]")[1].split(")")[0] +
      ")"
    : truncatedContent;

  const displayedContent = isFullView ? content : truncatedWithImage;

  const height = isFullView ? { height: "100%" } : null;

  return (
    <Container
      ref={postRef}
      style={{
        ...style,
        ...height,
        ...{ borderColor: !isDark ? "rgb(0, 120,100)" : undefined },
        //border: isCentral ? "0.01px solid rgba(60, 33, 228, 0.05)" : "2px solid black",
      }}
    >
      {isMobile && !pathname.includes("@") && (
        <AuthorMobilePostSection userId={userId} />
      )}

      <TitleContainer>
        <p
          style={{
            fontWeight: 400,
            fontSize: isMobile ? 18 : 20,
            color: "rgba(253, 182, 0, 1)",
          }}
        >
          //
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: isMobile ? 16 : 20,
            marginLeft: "5px",
            color: "rgba(84, 227, 70, 0.9)",
          }}
        >
          {title.toUpperCase()}
        </p>
        <img
          src={guardar}
          style={{ position: "absolute", right: 10 }}
          width={16}
        />
        {
          <img
            src={guardar}
            style={{ position: "absolute", right: 10 }}
            width={16}
          />
        }
      </TitleContainer>

      <ResultArea
        isFullView={isFullView}
        style={{
          background:
            isNearest &&
            (isDark
              ? "linear-gradient( 180deg,rgba(120, 100, 200, 0.1) 60.86%, rgba(217, 217, 217, 0) 100% )"
              : "linear-gradient( 180deg,rgba(137, 188, 161, 0.2) 60.86%, rgba(217, 217, 217, 0) 100% )"),
        }}
        isDark={isDark}
      >
        <ReactMarkdown
          children={displayedContent ? displayedContent : "cargando.."}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = match?.[1];
              const content = String(children).replace(/\n$/, "");
              if (inline) {
                return (
                  <code className={className} {...props}>
                    {content}
                  </code>
                );
              } else if (match) {
                return (
                  <SyntaxHighlighter
                    language={language}
                    style={nnfxDark as any}
                    PreTag="div"
                    children={content}
                    {...props}
                  />
                );
              } else {
                return (
                  <code className={className} {...props}>
                    {content}
                  </code>
                );
              }
            },
          }}
        />
      </ResultArea>
      {isFullView ? null : (
        <PostButton onClick={() => navigate("/post/" + id)} />
      )}
    </Container>
  );
};

const containerToRef = forwardRef(
  ({ className, children, style, key }: any, ref: any) => {
    return (
      <div key={key} className={className} ref={ref} style={style}>
        {children}
      </div>
    );
  }
);
const Container = styled(containerToRef)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  /* //justify-content: center; */
  width: 90%;
  padding: 13px;
  font-family: "Lato", sans-serif;
  background-color: rgba(60, 33, 228, 0.05);
  margin-top: 15px;
  margin-bottom: 50px;
  text-align: left;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 40px;
  height: 400px;
  border-style: solid none none none;
  border-color: rgba(48, 55, 48);

  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  outline: 0.1px solid;
  outline-color: rgba(255, 255, 255, 0.05);
  outline-offset: 0px;
  text-shadow: none;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 2px rgba(84, 227, 70, 1);
  }

  @media (${device.mobileS}) {
    height: 300px;
    padding: 0;
    border-radius: 10px;
    padding-top: 10px;
  }
  /*   @media (${device.mobileL}) {
    padding: 0;
    height: 300px;
  } */
  @media (${device.tablet}) {
    border-radius: 40px;
    padding: 20px;
  }
  @media (${device.laptop}) {
    height: 400px;
  }
`;

const ResultArea = styled.div<{
  isFullView: Boolean;
  isDark: Boolean;
  isMobile: Boolean;
}>`
  display: flex;

  flex-direction: column;
  padding: 30px;
  padding-top: 4px;
  box-sizing: border-box;
  border-radius: 24px;

  width: 100%;
  height: 90%;
  border: none;
  text-align: left;
  transition: background 2s linear;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0.04) 70.86%,
    rgba(217, 217, 217, 0) 100%
  );
  img {
    position: relative;
    max-width: 100%;
    max-height: ${({ isFullView }) => (isFullView ? "100%" : "20%")};
    /*  max-height: 20%;  */
    width: 100%;
    object-fit: cover;
  }
  @media (${device.mobileS}) {
    font-size: 14px;
  }
  @media (${device.tablet}) {
    font-size: 16px;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  @media (${device.mobileS}) {
    height: 20px;
    margin-bottom: 20px;

    padding: 0;
    padding-left: 10px;
  }
  @media (${device.laptop}) {
    height: 60px;
    margin-bottom: 5px;
    padding: 20px;
  }
`;

export default Post;
