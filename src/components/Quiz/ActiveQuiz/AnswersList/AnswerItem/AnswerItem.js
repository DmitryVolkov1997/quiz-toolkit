import React from "react";
import classes from "./AnswerItem.module.scss";
import {useDispatch} from "react-redux";
import {onAnswerClickHandler} from "../../../../../store/quizSlice";

const AnswerItem = ({id, text, state}) => {
    const dispatch = useDispatch();
    const cls = [classes.AnswerItem];

    if (state) {
        cls.push(classes[state]);
    }

    const onAnswerClick = () => {
        dispatch(onAnswerClickHandler({id}));
    };

    return (
      <li className={cls.join(" ")} onClick={onAnswerClick}>
          {text}
      </li>
    );
};

export default AnswerItem;
