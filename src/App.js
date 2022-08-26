import { Navbar } from "./components/Navbar/Navbar.js";
import { Main } from "./components/Main/Main.js";

export const App = () => {
  const App = document.createElement("div");

  App.setAttribute("class", "App");

  App.append(Navbar());
  App.append(Main());

  return App;
};
