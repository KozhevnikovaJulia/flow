import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { HomePage } from './ui/pages/HomePage/HomePage';
import { SigninPage } from './ui/pages/SigninPage/SigninPage';
import { DetailPage } from './ui/pages/DetailPage/DetailPage';
import { ChartPage } from './ui/pages/ChartPage/ChartPage';
import { Progress } from './ui/components/common/Progress/Progress';
import { Warning } from './ui/components/common/Warning/Warning';
import { setStartData } from '../src/bll/inputParameters_reducer';

export const App = () => {
  const [errorWarning, setErrorWarning] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector(state => state.app.status);
  const error = useSelector(state => state.app.error);
  const isInitialized = useSelector(state => state.app.isInitialized);
  console.log(isInitialized)

  useEffect(() => {
    error !== null && setErrorWarning(true);
  }, [error]);

  useEffect(() => {
    if (!isInitialized) {
      history.push('/signin');
    }
  }, [history, isInitialized]);

  useEffect(() => {
    dispatch(setStartData());
  }, [dispatch]);

  return (
    <div className='App'>
      {status === 'loading' && <Progress />}
      <Warning text={error} warningVisible={errorWarning} setWarningVisible={setErrorWarning} />
      <Switch>
        <Route exact path={'/'} render={() => <HomePage />} />
        <Route exact path={'/signin'} render={() => <SigninPage />} />
        <Route exact path={'/detail'} render={() => <DetailPage />} />
        <Route exact path={'/chart'} render={() => <ChartPage />} />
        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>} />
        <Redirect from={'*'} to={'/'}></Redirect>
      </Switch>
    </div>
  );
};
