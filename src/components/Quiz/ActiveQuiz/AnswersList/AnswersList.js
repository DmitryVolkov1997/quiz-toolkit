import React from "react";
import classes from "./AnswersList.module.scss";
import {useSelector} from "react-redux";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = () => {
    const answerNumber = useSelector(state => state.quiz.activeQuestion);
    const answers = useSelector(state => state.quiz.quiz[answerNumber].answers);
    const state = useSelector(state => state.quiz.answerState);

    return (
      <ul className={classes.AnswersList}>
          {
              answers.map((answer, i) => {
                  return <AnswerItem key={i} {...answer} state={state ? state[answer.id] : null}/>;
              })
          }
      </ul>
    );
};

export default AnswersList;
