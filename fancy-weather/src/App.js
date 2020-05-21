import React from "react";
import "./scss/style.scss";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
