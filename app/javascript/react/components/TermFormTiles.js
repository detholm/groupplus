import React from 'react'

const TermFormTiles = props => {

  return(
  <div className="TermTile">
    <input
      id={`${props.user.id}${props.term.term}`}
      name={props.term.term}
      type="checkbox"
      onChange={() => props.onSelected(props.term.id)}
    />
    <label htmlFor={`${props.user.id}${props.term.term}`}>
    {props.term.term}
    </label>
  </div>

  )
}
export default TermFormTiles
 // className="termTile"
