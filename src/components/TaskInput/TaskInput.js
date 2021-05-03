import React from "react";

import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
  let buttonClasses = classes.Button;
  if (props.active) {
    buttonClasses = [classes.Button, classes.Active].join(" ");
  }
  let inputClasses = classes.Input;
  if (props.invalid) {
    inputClasses = [classes.Input, classes.Danger].join(" ");
  }
  return (
    <div className={classes.Wrapper}>
      <form className={classes.Form} onSubmit={props.onSubmit}>
        <input
          value={props.value}
          className={inputClasses}
          placeholder="New item..."
          onChange={props.onChange}
        />
        <div className={classes.Characters}>{`${props.characters} / 128 `}</div>
        <button className={buttonClasses} onClick={props.onAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
