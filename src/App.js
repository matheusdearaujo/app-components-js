import { Navbar } from "./components/Navbar/Navbar.js";
import { Main } from "./components/Main/Main.js";

// import app from "./app.css" assert { type: "css" };

export const App = () => {
  const App = document.createElement("div");

  App.setAttribute("class", "App");
  // document.adoptedStyleSheets = [app];

  App.append(Navbar());
  App.append(Main());

  return App;
};
