import React, {useContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import SearchResult from './components/SearchResult/SearchResult'
import NotFound from './components/404/NotFound'
import { DarkModeContext } from './utils/DarkModeHook';
import styled from 'styled-components'

const AppComponent = styled.div`
  background-color: ${props => props.darkMode? "#fafafa": "#202c37"};
  height: auto;
  min-height: 100%;
`

export default function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <AppComponent className="App" darkMode={darkMode}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/search/:country" component={SearchResult}/>
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppComponent>
  )
}

