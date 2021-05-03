import React, { useState, useEffect } from "react";

import classes from "./App.module.css";

import TaskInput from "./components/TaskInput/TaskInput";
import Task from "./components/Task/Task";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (currentInput.length > 128) {
        setCurrentInput(currentInput.substring(0, 128));
      }
    }, 500);
  }, [currentInput]);

  const handleInput = (text) => {
    setCurrentInput(text);
  };
  const addTask = (event) => {
    event.preventDefault();
    if (currentInput) {
      const newTasks = [...tasks, currentInput];
      setTasks(newTasks);
      setCurrentInput("");
    }
  };
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  // console.log("currentInput: ", currentInput);
  // console.log("tasks: ", tasks);
  return (
    <div className={classes.Body}>
      <h1 className={classes.Heading}>WORK TO-DOS</h1>
      <TaskInput
        value={currentInput}
        onChange={(event) => handleInput(event.target.value)}
        onAdd={addTask}
        onSubmit={addTask}
        active={currentInput}
        characters={128 - currentInput.length}
        invalid={currentInput.length > 128}
      />
      <div className={classes.List}>
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            return <Task key={index} text={task} onDelete={() => deleteTask(index)} />;
          })}
      </div>
    </div>
  );
}

export default App;
