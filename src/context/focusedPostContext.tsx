import { useContext, createContext, useState } from "react";

export const FocusedPostContext = createContext({});

export const useFocusedPostContext = () => useContext(FocusedPostContext);

interface Post {
  title: string;
  content: string;
  id: string;
}

export const FocusedPostProvider = ({ children }: any) => {
  const [focusedPost, setFocusedPost] = useState<Post>({} as Post);

  return (
    <FocusedPostContext.Provider value={[focusedPost, setFocusedPost]}>
      {children}
    </FocusedPostContext.Provider>
  );
};

export default FocusedPostProvider;
