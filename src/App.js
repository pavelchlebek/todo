import React, { useState } from "react";

import classes from "./App.module.css";

import TaskInput from "./components/TaskInput/TaskInput";
import Task from "./components/Task/Task";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  return (
    <div className={classes.Body}>
      <h1 className={classes.Heading}>WORK TO-DOS</h1>
      <TaskInput active />
      <Task text="Don't panic! We got it!" />
    </div>
  );
}

export default App;
