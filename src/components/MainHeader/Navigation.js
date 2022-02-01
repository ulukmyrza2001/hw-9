import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (//isloggedin true болгондо корсотулот 
          <li>
            <a  href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (//isloggedin true болгондо корсотулот 
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>{/**logout басылганда onLogout иштейт ал App.js'те */}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
