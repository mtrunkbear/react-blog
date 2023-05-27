import { useColorMode } from "@chakra-ui/react";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { LinkStyle } from "./Buttons";

const ArticlesMenu = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const posts: any = useFetchPosts();

  return (
    <div style={{ height: "250px", width: "100%" }}>
      {posts?.slice(0, 5).map((post: any) => (
        <p
          key={post.id}
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            background: isDark
              ? "rgba(82, 5, 133, 0.4)"
              : "rgba(82, 109, 130,0.8)",
            border: "1px solid #000000",
            boxShadow: "12px 13px 16px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <LinkStyle
            filterColor={"violet"}
            width={"100%"}
            href={`/post/${post.id}`}
          >
            {post?.title}
          </LinkStyle>
        </p>
      ))}
    </div>
  );
};

export default ArticlesMenu;
