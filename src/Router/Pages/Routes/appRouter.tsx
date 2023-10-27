import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./Routes";

import { CardList } from "../CardList/CardList";
import { Featured } from "../Featured/Featured";

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <CardList />,
  },
  {
    path: ROUTES.Featured,
    element: <Featured />,
  },
]);
