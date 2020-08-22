import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase/app';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN
};
firebase.initializeApp(config);

const Photo = lazy(() => import('./features/Photo'));

function App() {

  // handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('user not login');
        return;
      }
    });

    return () => unregisterAuthObserver()
  }, [])

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/photos' />
            <Route path='/photos' component={Photo} />
            <Route path='/sign-in' component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
