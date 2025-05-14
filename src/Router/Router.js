import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import Header from "../components/Header";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "header",
        Component: Header,
      },
      {
        path: "addcoffee",
        Component: AddCoffee,
      },
      {
        path: "updatecoffee",
        Component: UpdateCoffee,
      },
      {
        path: "hero",
        Component: Hero,
      },
      {
        path: "homecard",
        Component: HomeCard,
      },
    ],
  },
]);
