import { useContext, createContext, useState } from "react";

export const ActualPostContext = createContext({});

export const useActualPostContext = () => useContext(ActualPostContext);

interface Post {
  title: string;
  content: string;
  id: string;
}

export const ActualPostProvider = ({ children }: any) => {
  const [actualPost, setActualPost] = useState<Post>({} as Post);

  return (
    <ActualPostContext.Provider value={[actualPost, setActualPost]}>
      {children}
    </ActualPostContext.Provider>
  );
};

export default ActualPostProvider;
