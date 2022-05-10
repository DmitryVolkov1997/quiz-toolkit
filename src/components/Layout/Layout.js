import React, {useState} from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Drawer from "../Navigation/Drawer/Drawer";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {toggleMenuHandler} from "../../store/quizSlice";

const Layout = ({children}) => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.quiz.menu);

    return (
      <div className={classes.layout}>
          <MenuToggle onToggle={() => dispatch(toggleMenuHandler())} isOpen={menu}/>
          <Drawer isOpen={menu}/>
          <main className={classes.main}>
              {children}
          </main>
      </div>
    );
};

export default Layout;
