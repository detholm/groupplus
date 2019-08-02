import React, {Component } from "react";
import TeamTile from "../components/TeamTile"

class TeamShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

    componentDidMount(){
    let teamID = this.props.match.params.id
    fetch(`/api/v1/teams/${this.props.match.params.id}`)
    .then(response => response.json())
    .then((teamBody) => {
      this.setState({name: teamBody.name, description: teamBody.description})
    })
    //fetch(`/api/v1/users/$`)
  }
  render() {

    return(
      <h1 className="jsxContainer"> {this.state.name} </h1>

    )
  }
}



export default TeamShowContainer;
