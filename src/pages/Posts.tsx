import { useState, useEffect } from "react";
import Post from "../components/Post";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useParams } from "react-router";
import { useUserContext } from "../context/UserContext";

interface PostsProps {
  userId?: string;
  id?: string;
}

const Posts = () => {
  const [filteredPosts, setFilteredPosts] = useState<any>();
  const allPosts: any = useFetchPosts();
  const { userNickName, id: fullPostId } = useParams();
  const { users }: any = useUserContext();

  //TODO: make  custom hooks to this filter
  useEffect(() => {
    if (allPosts) {
      if (userNickName && users?.length > 0) {
        const user = users.find(
          ({ nickName }: any) =>
            nickName.trim().toLowerCase() ==
            userNickName.slice(1).trim().toLocaleLowerCase()
        );
        if (user) {
          const filtered = allPosts?.filter(
            (post: PostsProps) => post?.userId == user.id
          );
          setFilteredPosts(filtered);
        }
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
  }, [allPosts, users, userNickName, fullPostId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: "400px",
        boxSizing: "border-box",
      }}
    >
      {filteredPosts &&
        filteredPosts?.map(({ id, title, content, userId }: any) => (
          <Post
            key={id}
            id={id}
            title={title}
            content={content}
            userId={userId}
            isFullView={!!fullPostId}
            firstPost={filteredPosts[0]}
          />
        ))}
    </div>
  );
};

export default Posts;
