import React from "react";
import TodoList from "./TodoList";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <h1>Sample Redux Todo List</h1>
      <h2>Because All Good Demonstrations Start With Todo Lists</h2>
      <TodoList />
    </div>
  );
};

export default App;
