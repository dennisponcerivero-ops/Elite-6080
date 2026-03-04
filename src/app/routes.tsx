import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ApartmentDetail } from "./pages/ApartmentDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      errorElement: <NotFound />,
      children: [
        { index: true, Component: Home },
        { path: "apartment/:id", Component: ApartmentDetail },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);