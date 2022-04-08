import React from "react";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Movie id="1" />
      <Counter />
    </div>
  );
};

export default App;
