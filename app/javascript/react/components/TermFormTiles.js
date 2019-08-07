import React from 'react'

const TermFormTiles = props => {

  return(
  <div>
    <label htmlFor={props.term.term}>{props.term.term}</label>
    <input
      id={props.term.term}
      name={props.term.term}
      type="checkbox"
      onChange={() => props.onSelected(props.term.id)} />
  </div>

  )
}
export default TermFormTiles
 // className="termTile"
