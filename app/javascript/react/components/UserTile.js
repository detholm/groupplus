import React from 'react'
import { Link } from 'react-router-dom'
import TermFormContainer from '../containers/TermFormContainer'

const UserTile = props => {
  return(
    <div className="jsxYellow">
    <h3 >
      Name: {props.user.first_name} {props.user.last_name}
    </h3>
    Form: <div> <TermFormContainer {...props.terms}/></div>

    </div>
  )
}


export default UserTile;
