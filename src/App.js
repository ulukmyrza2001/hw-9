import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInfo = localStorage.getItem('key') // local'дан кайра алып алабыз бир переменныйга
    if (storedUserLoggedInfo ==='1'){// эгер условия true болсо isloggedin true болуп тура берет
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {
    localStorage.setItem('key','1') // form отправка болгондо localstorage'ге салынып турат, что бы страницаны перезагрузка кылса деле home'до тура бериш учун
    setIsLoggedIn(true); // isloggedin true болуп калат жана home корсотулот
  };

  const logoutHandler = () => {
    localStorage.removeItem('key') // logout басылганда localstorage'ди ключу аркылуу тазалап турат что бы кайра страницаны перезагрузка кылса деле loginде тура бериш учун
    setIsLoggedIn(false); //logout басылганда бул false болуп кайра login деген компонент корсотулуп home корунбой калат 
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />} {/**условияга карап корсотулот мисалы false болсо login корсотулот  */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}{/**условияга карап корсотулот мисалы true болсо home корсотулот  */}
      </main>
    </React.Fragment>
  );
}

export default App;
