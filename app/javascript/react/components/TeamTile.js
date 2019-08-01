import React from 'react'
import { Link } from 'react-router-dom'

const TeamTile = props => {

  let name = props.name

  return(
    <h3 className="jsxYellow">
    <Link to={`/teams/${props.id}`}> {name} </Link>
    </h3>
  )
}


export default TeamTile
