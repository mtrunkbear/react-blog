import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

export const useFetchPosts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`${apiUrl}/api/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return posts;
};
