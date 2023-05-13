import { useState, useEffect } from "react";
import Post from "./Post";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useParams } from "react-router";

interface PostsProps {
  userId?: string;
  id?: string;
}

const Posts = (/* { userId, id }: PostsProps */) => {
  const [filteredPosts, setFilteredPosts] = useState<any>();
  const allPosts: any = useFetchPosts();
  let { userId, id: fullPostId } = useParams();
  console.log({ userId, fullPostId });
 

  useEffect(() => {
    if (allPosts) {
      if (userId) {
        const filtered = allPosts?.filter(
          (post: PostsProps) => post?.userId === userId
        );
        setFilteredPosts(filtered);
      } else if (fullPostId) {
        const filtered = allPosts?.filter(
          (post: PostsProps) => post?.id === fullPostId
        );
        setFilteredPosts(filtered);
      } else {
        setFilteredPosts(allPosts);
      }
    } else {
      setFilteredPosts([]);
    }
    //console.log({ allPosts });
  }, [allPosts, userId, fullPostId]);

  //console.log({ filteredPosts });
  return (
    <div style={{ width: "100%", marginBottom: "400px" }}>
      {filteredPosts &&
        filteredPosts?.map(({ id, title, content }: any) => (
          <Post
            key={id}
            id={id}
            title={title}
            content={content}
            isFullView={!!fullPostId}
          />
        ))}
    </div>
  );
};

export default Posts;
