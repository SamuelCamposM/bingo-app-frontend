import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const ChatPage = lazy(() => import("../pages/Chat/ChatPage"));
const Page2 = lazy(() => import("../pages/Page2/Page2"));
const Page3 = lazy(() => import("../pages/Page3/Page3"));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "chat",
    path: "chat",
    Component: ChatPage,
    name: "Chat",
  },
  {
    to: "page2",
    path: "page2",
    Component: Page2,
    name: "Page2",
  },
  {
    to: "page3",
    path: "page3",
    Component: Page3,
    name: "Page3",
  },
];
