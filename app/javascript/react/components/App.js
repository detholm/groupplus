import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TeamIndexContainer from '../containers/TeamIndexContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/teams" component={TeamIndexContainer}/>
      </Switch>
    </BrowserRouter>



  )
}

export default App
