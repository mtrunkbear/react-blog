import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";

const renderRoutes = (routes: routerType[]) => {
  return routes.map(({ path, title, element, children }: routerType) => {
    if (children) {
      return (
        <Route key={title} path={path} element={element}>
          {renderRoutes(children)}
        </Route>
      );
    } else {
      return <Route key={title} path={path} element={element} />;
    }
  });
};

const Router = () => {
  return <Routes>{renderRoutes(pagesData)}</Routes>;
};

export default Router;
