import React, { Component } from "react"
import TeamTile from "../components/TeamTile"
import UserTile from '../components/UserTile'
import TermFormContainer from '../containers/TermFormContainer'

class TeamShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      terms: []
    }
  }

    componentDidMount(){
    let teamID = this.props.match.params.id
    fetch(`/api/v1/teams/${this.props.match.params.id}`)
    .then(response => response.json())
    .then((teamBody) => {

      this.setState({
        name: teamBody.team.name,
        description: teamBody.description,
        users: teamBody.users,
        terms: teamBody.terms

      })
    })
  }

  render() {
    let userTiles = this.state.users.map(user => {
      return(
        <UserTile
        key={user.id}
        user={user}
        terms={this.state.terms}
        />
      )
    })

    return(
      <div >
      <div>
        <h1>{this.state.name}</h1>
      </div>
          <div className="jsxblue">
            {userTiles}
          </div>
      </div>
    );
  }
}



export default TeamShowContainer;
