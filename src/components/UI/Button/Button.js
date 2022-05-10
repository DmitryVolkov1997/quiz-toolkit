import React from "react";
import classes from "./Button.module.scss";

const Button = ({disabled, type, onClick, children}) => {
    const cls = [classes.Button, classes[type]];
    return (
      <button className={cls.join(" ")} disabled={disabled} onClick={onClick}>
          {children}
      </button>
    );
};

export default Button;
