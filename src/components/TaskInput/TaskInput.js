import React from "react";

import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
  let buttonClasses = classes.Button;
  if (props.active) {
    buttonClasses = [classes.Button, classes.Active].join(" ");
  }
  return (
    <div className={classes.Wrapper}>
      <input className={classes.Input} placeholder="New item..." />
      <span className={buttonClasses} onClick={props.onClick}>
        Add
      </span>
    </div>
  );
};

export default TaskInput;
