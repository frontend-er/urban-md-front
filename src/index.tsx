import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/store';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import "@fontsource/roboto-slab";
import {
  BrowserRouter as Router,

} from "react-router-dom";





const store = new Store();

interface IContext {
  store: Store
}


export const Context = createContext<IContext>({ store, })



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Context.Provider value={{
      store
    }}>
      <Router>
        <App />
      </Router>

    </Context.Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

