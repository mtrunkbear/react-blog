import { useEffect, useState } from "react";

const useActualUser = (users: any, focusedPost: any, pathname: any) => {
  const [actualUser, setActualUser] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    description: "",
    id: "",
    nickName: "",
    avatarUrl: "",
  });

  useEffect(() => {
    console.log(users,pathname,focusedPost,actualUser)
    if (users && pathname) {
      const userNickNameInPath = decodeURIComponent(
        pathname?.slice(2).toLocaleLowerCase()
      );
      console.log({userNickNameInPath})
      const userOfNickName = users.find(
        ({ nickName }: any) =>
          nickName.trim().toLowerCase() === userNickNameInPath &&
          nickName.trim().toLowerCase() !== ""
      );
      console.log({userOfNickName});
      if (userOfNickName) {
        setActualUser(userOfNickName);
      } else if (users && focusedPost) {
        const userOfFocusedPost = users.find(
          ({ id }: any) => id === focusedPost.userId
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
