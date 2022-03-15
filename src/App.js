import "./App.css";
import React from "react";
import Task1 from "./components/tasks/Task1";
import Task2 from "./components/tasks/Task2";
import Task3 from "./components/tasks/Task3";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  );
}
