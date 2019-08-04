import React from 'react'
import { Link } from 'react-router-dom'
import TermFormContainer from '../containers/TermFormContainer'

const UserTile = props => {
console.log(props)
  let name = props.first_name

  return(
    <div className="jsxYellow">
    <h3 >
      Name: {props.user.first_name} {props.user.last_name}
    </h3>
    Form: <div> <TermFormContainer {...props.terms}/></div>
    // Creat a form component and render here
    // Pass terms as props
    </div>
  )
}


export default UserTile
