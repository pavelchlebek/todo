import React from "react";

import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
  let buttonClasses = classes.Button;
  if (props.active) {
    buttonClasses = [classes.Button, classes.Active].join(" ");
  }
  return (
    <div className={classes.Wrapper}>
      <form className={classes.Form} onSubmit={props.onSubmit}>
        <input
          value={props.value}
          className={classes.Input}
          placeholder="New item..."
          onChange={props.onChange}
        />
        <button className={buttonClasses} onClick={props.onAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
