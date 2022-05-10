import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import {NavLink} from "react-router-dom";
import {menuCloseHandler} from "../../../store/quizSlice";
import {useDispatch} from "react-redux";

const links = [{
    to: '/', label: "Список тестов"
},
    {
        to: '/auth', label: "Авторизация"
    },
    {
        to: '/quiz-creator', label: "Создать тест"
    }];

const Drawer = ({isOpen}) => {
    const dispatch = useDispatch();
    const cls = [classes.Drawer, !isOpen && classes.close];

    const renderLinks = () => {
        return links.map((link, i) => {
            return (
              <li key={i} className={classes.item}>
                  <NavLink className={classes.link} to={link.to} onClick={() => dispatch(menuCloseHandler())}>
                      {link.label}
                  </NavLink>
              </li>
            );
        });
    };

    return (
      <>
          {isOpen ? <Backdrop/> : null}
          <nav className={cls.join(" ")}>
              <ul>{renderLinks()}</ul>
          </nav>
      </>
    );
};

export default Drawer;
