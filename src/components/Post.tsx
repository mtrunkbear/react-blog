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
  const postRef = useRef<any>(null);

  const isNearest: any = useNearestElement(postRef);

  useEffect(() => {
    if (!focusedPost?.id) {
      setFocusedPost(firstPost);
    }
    if (isNearest) {
      setFocusedPost({ title, content, style, id, userId });
    }
  }, [isNearest, firstPost]);

  const { viewportWidth } = useWindowPosition();
  const isMobile = viewportWidth <= parseFloat(windowSizes.tablet);
  const shortenedContent = isMobile
    ? content.slice(0, 100)
    : content.slice(0, 250);

  const slicedContent = isFullView ? content : shortenedContent;
  const fullViewHeight = isFullView ? { height: "100%" } : null;

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container
      ref={postRef}
      style={{
        ...style,
        ...fullViewHeight,
        ...{ borderColor: !isDark ? 'rgb(0, 120,100)' : undefined },
        //border: isCentral ? "0.01px solid rgba(60, 33, 228, 0.05)" : "2px solid black",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",

          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: 20,
            color: "rgba(253, 182, 0, 1)",
          }}
        >
          //
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: 20,
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
      </div>

      <ResultArea
        style={{
          background:
            isNearest &&
            "linear-gradient( 180deg,rgba(120, 100, 200, 0.1) 60.86%, rgba(217, 217, 217, 0) 100% )",
        }}
      >
        <ReactMarkdown
          children={slicedContent ? slicedContent : "cargando.."}
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
  margin-bottom: 10px;
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
  }
  @media (${device.laptop}) {
    height: 400px;
  }
`;

/* const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`; */

const ResultArea = styled.div`
  padding: 30px;
  padding-top: 4px;
  box-sizing: border-box;
  border-radius: 24px;

  width: 100%;
  height: 90%;
  border: none;
  font-size: 17px;
  text-align: left;
  transition: background 2s linear;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0.04) 70.86%,
    rgba(217, 217, 217, 0) 100%
  );
`;

export default Post;
