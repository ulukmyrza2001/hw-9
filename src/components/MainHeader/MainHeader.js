import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (/// бул компонент шапка катары корсотулот (header)
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />{/* navigation ушул жерден чакырылып жатат */}
    </header>
  );
};

export default MainHeader;
