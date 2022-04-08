import React from "react";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Movie id="1" />
      <Counter />
      <Users />
    </div>
  );
};

export default App;
