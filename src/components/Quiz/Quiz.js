import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import {useSelector} from "react-redux";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";

const Quiz = () => {
    const isFinished = useSelector(state => state.quiz.isFinishedQuiz);

    return (
      <div className={classes.quiz}>
          <div className={classes.quiz__wrapper}>
              <h1 className={classes.quiz__title}>Пройти тесты</h1>
              {!isFinished ? <ActiveQuiz/> : <FinishedQuiz/>}
          </div>
      </div>
    );
};

export default Quiz;
