import React, { useEffect } from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid : userAuth.uid,
          email: userAuth.email,

        }));
      }else{
        //Logged out
        dispatch(logout());
      }
      
    })

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">

      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {!user ? (
              <LoginScreen />
        ) :(
          <Switch>
          <Route path='/profile'>
              <ProfileScreen />
          </Route>
          <Route path="/">
              <HomeScreen />
          </Route>
        </Switch>
            )}
        
    </Router>
      

    </div>
  );
}

export default App;
