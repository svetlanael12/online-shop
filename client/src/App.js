import React, {useContext, useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/index'
import NavBar from './components/navbar';
import { check } from './http/userAPI';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
    .then(() => {
      user.setUser(true)
      user.setIsAuth(true)
    })
    .catch((e) => console.info(e.response.data.message))
    .finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      {
        loading ?
        <div style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginTop: '2rem'
        }}>Loading...</div> :
        <NavBar />
      }
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
