import { useEffect, useState } from "react";

const useActualUser = (users, focusedPost, pathname) => {
  const [actualUser, setActualUser] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    description: "",
    id: "",
    nickName: "",
  });
  useEffect(() => {
    if (users) {
      const userNickNameInPath = decodeURIComponent(
        pathname?.slice(2).toLocaleLowerCase()
      );
      const userOfNickName =
        pathname &&
        users.find(
          ({ nickName }) =>
            nickName.toLowerCase() === userNickNameInPath &&
            nickName.toLowerCase() !== ""
        );
      if (userOfNickName) {
        setActualUser(userOfNickName);
      } else if (users && focusedPost) {
        const userOfFocusedPost = users.find(
          ({ id }) => id === focusedPost.userId
        );
        if (userOfFocusedPost) {
          setActualUser(userOfFocusedPost);
        }
      }
    }
  }, [focusedPost, users, pathname]);

  return actualUser; // Return the value of actualUser if needed
};

export default useActualUser;
