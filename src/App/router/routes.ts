import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Page2 = lazy(() => import("../pages/Page2/Page2"));
const Page3 = lazy(() => import("../pages/Page3/Page3"));
const Page4 = lazy(() => import("../pages/Page2/Page2"));
const Page5 = lazy(() => import("../pages/Page3/Page3"));
const Page6 = lazy(() => import("../pages/Page2/Page2"));
const Page7 = lazy(() => import("../pages/Page3/Page3"));

const pages = {
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
};
export const routes: Route[] = [
  {
    to: "page2",
    path: "page2",
    Component: pages["Page2"],
    name: "page2",
  },
  {
    to: "page3",
    path: "page3",
    Component: pages["Page3"],
    name: "page3",
  },
  {
    to: "page4",
    path: "page4",
    Component: pages["Page4"],
    name: "page4",
  },
  {
    to: "page5",
    path: "page5",
    Component: pages["Page5"],
    name: "page5",
  },
  {
    to: "page6",
    path: "page6",
    Component: pages["Page6"],
    name: "page6",
  },
  {
    to: "page7",
    path: "page7",
    Component: pages["Page7"],
    name: "page7",
  },
];
