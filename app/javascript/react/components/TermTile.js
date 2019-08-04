import React from 'react'
import { Link } from 'react-router-dom'
import TermFormContainer from '../containers/TermFormContainer'

const TermTile = props => {
 console.log(props)


  return(
    <div>
    <p className="brown">
      Term: {props.term.id} {props.term.term}
    </p>
    </div>
  )
}


export default TermTile
