import React from 'react'
import { Link } from 'react-router-dom'

const TeamTile = props => {

  let name = props.name
  return(
    <h2 className="testbutton">
    <Link to={`/teams/${props.id}`}> {name} </Link>
    </h2>
  )
}

export default TeamTile
