import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import './index.css';
import reportWebVitals from './reportWebVitals';

import history from './utils/history';
import Dashboard from './screens/Dashboard'




export class Routing extends Component {

  componentDidMount() {
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    } catch {
      console.log("Error: Routing");
    }
  }

  render() {
  

    return (
      <React.Fragment>
        <Router history={history}>
          <Switch>

            <Route path="/" component = {Dashboard}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
