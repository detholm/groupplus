import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TeamIndexContainer from '../containers/TeamIndexContainer'
import TeamShowContainer from '../containers/TeamShowContainer'
import UserShowContainer from '../containers/UserShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TeamIndexContainer}/>
        <Route exact path="/teams/:id" component={TeamShowContainer}/>
        <Route exact path="/users/:id" component={UserShowContainer}/>

      </Switch>
    </BrowserRouter>



  )
}

export default App
