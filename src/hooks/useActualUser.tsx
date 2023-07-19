import { useEffect, useState } from "react";

const useActualUser = (users:any, focusedPost:any, pathname:any) => {
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
          ({ nickName }:any) =>
            nickName.toLowerCase() === userNickNameInPath &&
            nickName.toLowerCase() !== ""
        );
      if (userOfNickName) {
        setActualUser(userOfNickName);
      } else if (users && focusedPost) {
        const userOfFocusedPost = users.find(
          ({ id }:any) => id === focusedPost.userId
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
