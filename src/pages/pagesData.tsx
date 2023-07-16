import { routerType } from "../types/router.types";
import Posts from "./Posts";
import NewPost from "./NewPost";
import Settings from "./Settings";

const pagesData: routerType[] = [
  {
    path: "/:userNickName",
    element: <Posts />,
    title: "Posts",
  },
  {
    path: "/",
    element: <Posts />,
    title: "Posts",
  },
  {
    path: "/post",
    element: <Posts />,
    title: "Posts",
    children: [
      {
        path: ":id",
        element: <Posts />,
        title: "Posts",
      },
    ],
  },
  {
    path: "/write",
    element: <NewPost />,
    title: "New Post",
  },
  {
    path: "/settings",
    element: <Settings />,
    title: "New Post",
  },
];

export default pagesData;
