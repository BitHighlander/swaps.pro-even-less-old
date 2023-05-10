import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
// import Swap from "lib/pages/swap";
import Dashboard from "lib/pages/dashboard";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
];

export const privateRoutes: Array<PathRouteProps> = [];
