import React from "react";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { LinkStyle } from "./Buttons";

const ArticlesMenu = () => {
  const posts: any = useFetchPosts();

  return (
    <div style={{ height: "250px", width: "100%" }}>
      {posts?.slice(0, 5).map((post: any) => (
           <p
           style={{
            display:"flex",
            alignItems: "center",
             height: "30px",
             background: "rgba(82, 5, 123, 0.58)",
             border: "1px solid #000000",
             boxShadow: "12px 13px 16px 2px rgba(0, 0, 0, 0.25)",
             borderRadius: "10px",
             width:"100%"
           }}
         >
        <LinkStyle filterColor={'violet'} width={"100%"} href="/">
       
            {post?.title}
         
        </LinkStyle>
        </p>
      ))}
    </div>
  );
};

export default ArticlesMenu;
