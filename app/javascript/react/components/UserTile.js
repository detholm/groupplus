import React from 'react'
import { Link } from 'react-router-dom'
import TermFormContainer from '../containers/TermFormContainer'

const UserTile = props => {
  return(

    <div className="jsxYellow userTileWrapper">
      <h5>
        {props.user.first_name} {props.user.last_name}
      </h5>
      <div className="jsxPurple">
        <TermFormContainer terms={props.terms}/>
      </div>
    </div>
  )
}

export default UserTile;
