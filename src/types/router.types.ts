export interface routerType {
  title: string;
  path: string;
  children?: routerType[];
  element: JSX.Element;
}