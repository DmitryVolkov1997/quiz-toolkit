import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";
import {useSelector} from "react-redux";

const ActiveQuiz = () => {
    const answerNumber = useSelector(state => state.quiz.activeQuestion);
    const question = useSelector(state => state.quiz.quiz[answerNumber].question);
    const quizLength = useSelector(state => state.quiz.quiz.length);

    return (
      <div className={classes.ActiveQuiz}>
          <p className={classes.ActiveQuiz__count}>
              Вопрос {answerNumber + 1}/{quizLength}
          </p>
          <p className={classes.ActiveQuiz__question}>
              {question}
          </p>
          <AnswersList/>
      </div>
    );
};

export default ActiveQuiz;
