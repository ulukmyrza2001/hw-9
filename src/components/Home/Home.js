import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {// isloggedin true болсо ушул компонент DOM'го кирип экранга отрисовка болот
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1> 
    </Card>
  );
};

export default Home;
