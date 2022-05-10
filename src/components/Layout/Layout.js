import React from "react";
import classes from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
      <div className={classes.layout}>
          <main className={classes.main}>
              {children}
          </main>
      </div>
    );
};

export default Layout;
