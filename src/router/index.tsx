import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/Characters/Characters";
import Episodes from "../pages/Episodes/Episodes";
import Locations from "../pages/Locations/Locations";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "episodes",
        element: <Episodes />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
    ],
  },
]);
