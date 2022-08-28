import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
];
