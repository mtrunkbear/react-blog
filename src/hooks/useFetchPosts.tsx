import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

export const useFetchPosts = () => {
  const [posts, setPosts] = useState();
  //console.log({ posts });

  useEffect(() => {
    fetch(`${apiUrl}/api/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log({ posts });
  }, []);

  return posts;
};
