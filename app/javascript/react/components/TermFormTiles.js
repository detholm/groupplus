import React from 'react'

const TermFormTiles = props => {

  return(
  <div className="TermTile">
    <label htmlFor={props.term.term}>
    <input
      id={props.term.term}
      name={props.term.term}
      type="checkbox"
      onChange={() => props.onSelected(props.term.id)} />
      {props.term.term}
      </label>
  </div>

  )
}
export default TermFormTiles
 // className="termTile"
