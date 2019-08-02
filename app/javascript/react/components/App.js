import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TeamIndexContainer from '../containers/TeamIndexContainer'
import TeamShowContainer from '../containers/TeamShowContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TeamIndexContainer}/>
        <Route exact path="/teams/:id" component={TeamShowContainer}/>
        
      </Switch>
    </BrowserRouter>



  )
}

export default App
