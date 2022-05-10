import React from "react";
import classes from "./FinishedQuiz.module.scss";
import {IoClose, IoChevronDownSharp} from "react-icons/io5";
import {useSelector} from "react-redux";

const FinishedQuiz = () => {
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
              {/*<li className={classes.FinishedQuiz__item}>*/}
              {/*    <strong>1. </strong>*/}
              {/*    How are you?*/}
              {/*    <IoClose className={classes.error}/>*/}
              {/*</li>*/}
              {/*<li className={classes.FinishedQuiz__item}>*/}
              {/*    <strong>2.</strong>*/}
              {/*    How are you?*/}
              {/*    <IoChevronDownSharp className={classes.success}/>*/}
              {/*</li>*/}
          </ul>
          <div className={classes.borderTop}>
              <p className={classes.FinishedQuiz__count}>Правильно {successCount} из {quiz.length}</p>
              <div>
                  <button>Повторить</button>
                  <button type="success">Перейти в список тестов</button>
              </div>
          </div>
      </div>
    );
};

export default FinishedQuiz;
