import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {
console.log(props)
  let name = props.first_name

  return(
    <div>
    <h3 className="jsxYellow">
      Name: {props.user.first_name} {props.user.last_name}
    </h3>
    // Creat a form component and render here 
    // Pass terms as props
    </div>
  )
}


export default UserTile
