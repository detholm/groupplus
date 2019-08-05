import React, { Component } from "react"
import TermFormTiles from '../components/TermFormTiles'

class TermFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', terms: this.props.terms };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Succesful Submit');
    event.preventDefault();
  }

  render() {
    // map over terms that are in state
    // for each term, create a <div> containing a <label> and an <input>
    // save all that as some var, then use {some var} in the return to display
    // will also need to pass each one handleChange

  let termFormTiles = this.props.terms.map(term =>{

    return(

        <TermFormTiles
        key={term.id}
        term={term.term}
        />
    )
  })
    return (
    <div className="termsForm">
      <form >
        {termFormTiles}
        <input type="submit" />
      </form>
    </div>

    );
  }
}
export default TermFormContainer
