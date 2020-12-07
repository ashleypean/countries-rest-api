import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import SearchResult from './components/SearchResult/SearchResult'
import NotFound from './components/404/NotFound'
import {ThemeProvider}  from './utils/ThemeContext'


export default function App() {
  return (
    <ThemeProvider>
      {value => (
        <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/search/:country" component={SearchResult}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
      )}
    </ThemeProvider>
  );
}

