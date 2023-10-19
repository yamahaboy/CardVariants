import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./Routes";

import { CardList } from "../CardList/CardList";
import { CardPage } from "../CardPage/CardPage";
import { Featured } from "../Featured/Featured";

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <CardList />,
  },
  {
    path: `${ROUTES.CardPage}/:id`,
    element: <CardPage />,
  },
  {
    path: ROUTES.Featured,
    element: <Featured />,
  },
]);
