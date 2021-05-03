import React from "react";

import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <div className={classes.Wrapper}>
      <span className={classes.Text}>{props.text}</span>
      <span className={classes.Delete} onClick={props.onClickDelete}>
        X
      </span>
    </div>
  );
};

export default Task;
