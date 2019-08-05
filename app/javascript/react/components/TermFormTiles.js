import React from 'react'

const TermFormTiles = props => {

  return(
  <div >
    <label className="termTile">
    <input type="checkbox" value="props.term" ref={this.input} />
      {props.term}
    </label>
  </div>

  )
}
export default TermFormTiles
