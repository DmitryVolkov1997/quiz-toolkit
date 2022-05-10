import React from "react";
import classes from "./Backdrop.module.scss";
import {menuCloseHandler} from "../../../store/quizSlice";
import {useDispatch} from "react-redux";

const Backdrop = () => {
    const dispatch = useDispatch();

    return (
      <div className={classes.Backdrop} onClick={() => dispatch(menuCloseHandler())}>
      </div>
    );
};

export default Backdrop;
