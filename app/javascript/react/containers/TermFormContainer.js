import React, { Component } from "react"
import TermFormTiles from '../components/TermFormTiles'

class TermFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTerms: [],
      terms: this.props.terms,
      user: this.props.user
    };

     this.handleSaveClick = this.handleSaveClick.bind(this);
     this.termTileSelected = this.termTileSelected.bind(this);
  }

  handleSaveClick(event) {
    const userId = this.state.user.id
    const matches = this.state.selectedTerms.map( (termId) => {
      return {to_user: userId, term: termId}
    })
    // this.state.user.id


    fetch('/api/v1/matches', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        matches: matches
      })
    }).then(res=>res.json())
      .then(res => console.log(res));
  }

  termTileSelected(termId) {
    const selected = this.state.selectedTerms
    selected.push(termId)
    this.setState({selectedTerms: selected})
  }
  render() {

  let termFormTiles = this.props.terms.map(term =>{

    return(
        <TermFormTiles
        key={term.id}
        term={term}
        user={this.state.user}
        onSelected={this.termTileSelected}
        />
    )
  })
    return (
    <div className="termsForm callout">

      <form >
        {termFormTiles}
        <input onClick={this.handleSaveClick}
        type="button" value="Save"/>
      </form>

    </div>

    );
  }
}
export default TermFormContainer
