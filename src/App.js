
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {createBrowserHistory} from 'history';
export const customHistory = createBrowserHistory();  //This maintains custom history
export default class App extends Component {

  render() {
    return (
      <div>
        <Router history={customHistory}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

