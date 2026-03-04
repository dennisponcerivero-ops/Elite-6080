import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ApartmentDetail } from "./pages/ApartmentDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "apartment/:id", Component: ApartmentDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
