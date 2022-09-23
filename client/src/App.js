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
    try{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    } catch (e) {
        console.error(e.response.data.message)
    } 
  }, [])

 if (loading) {
  return <div>Loading...</div>
 }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
