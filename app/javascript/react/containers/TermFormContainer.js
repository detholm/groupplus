import React, { Component } from "react"
// Look at foundation forms  to make them cool

class TermFormContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(

      <form className= "callout">
      <div className="radio">
      <label>
        <input type="radio" value="option1" />
        Option 1
      </label>
    </div>
  </form>
    );
  }
}
export default TermFormContainer
