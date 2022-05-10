import React from "react";
import classes from "./QuizList.module.scss";
import {NavLink} from "react-router-dom";
import {IoSchoolSharp} from "react-icons/io5";

const QuizList = () => {
    const renderQuizes = () => {
        return [1, 2, 3].map((quiz, i) => {
            return (
              <li className={classes.item} key={i}>
                  <NavLink className={classes.link} to={"/quiz/" + quiz}>
                      <IoSchoolSharp className={classes.img}/>
                      Тест {quiz}
                  </NavLink>
              </li>
            );
        });
    };

    return (
      <div className={classes.QuizList}>
          <div className={classes.container}>
              <h1 className={classes.title}>Список тестов</h1>

              <ul>
                  {renderQuizes()}
              </ul>
          </div>
      </div>
    );
};

export default QuizList;
