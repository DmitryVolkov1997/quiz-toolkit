import React from "react";
import classes from "./FinishedQuiz.module.scss";
import {IoClose, IoChevronDownSharp} from "react-icons/io5";
import {useSelector, useDispatch} from "react-redux";
import {onRetryHandler} from "../../store/quizSlice";
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = () => {
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.quiz.quiz);
    const results = useSelector(state => state.quiz.results);

    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === "success") {
            total++;
        }
        return total;
    }, 0);

    return (
      <div className={classes.FinishedQuiz}>
          <ul>
              {
                  quiz.map((quizItem, i) => {
                      return (
                        <li className={classes.FinishedQuiz__item} key={i}>
                            <strong>{i + 1}</strong>.&nbsp;
                            {quizItem.question}
                            {
                                results[quizItem.id] === "success" ?
                                  <IoChevronDownSharp className={classes.success}/> :
                                  <IoClose className={classes.error}/>
                            }
                        </li>
                      );
                  })
              }
          </ul>
          <div className={classes.borderTop}>
              <p className={classes.FinishedQuiz__count}>Правильно {successCount} из {quiz.length}</p>
              <div className={classes.buttons}>
                  <Button type="primary" onClick={() => dispatch(onRetryHandler())}>Повторить</Button>
                  <Button type="success">
                      <Link to="/">Перейти в список тестов</Link>
                  </Button>
              </div>
          </div>
      </div>
    );
};

export default FinishedQuiz;
