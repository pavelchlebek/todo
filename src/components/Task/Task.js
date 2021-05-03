import React from "react";

import classes from "./Task.module.css";

const Task = (props) => {
  let content = props.text;
  return (
    <div className={classes.Wrapper}>
      <span className={classes.Text}>{content}</span>
      <span className={classes.Delete} onClick={props.onDelete}>
        X
      </span>
    </div>
  );
};

export default Task;
