import React, { FC } from 'react';
import { observer } from "mobx-react-lite";
import {
  BrowserRouter as Router,
  Switch,
  Route, useLocation
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { AnimatePresence, motion } from 'framer-motion';
import RestoreBrokenCourse from './pages/RestoreBrokenCourse';


const App: FC = () => {

  const location = useLocation();


  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/course/1">
          <RestoreBrokenCourse />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default observer(App);