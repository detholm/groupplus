import React from 'react'
import { Link } from 'react-router-dom'
import TermFormContainer from '../containers/TermFormContainer'

const UserTile = props => {
  return(

    <div>
      <h4 className="formName">
        {props.user.first_name} {props.user.last_name}
      </h4>
      <div>
        <TermFormContainer terms={props.terms} user={props.user}/>
      </div>
    </div>
  )
}

export default UserTile;
