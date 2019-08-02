import React, {Component } from "react";
import TeamTile from "../components/TeamTile"
import UserTile from '../components/UserTile'

class TeamShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

    componentDidMount(){
    let teamID = this.props.match.params.id
    fetch(`/api/v1/teams/${this.props.match.params.id}`)
    .then(response => response.json())
    .then((teamBody) => {

      this.setState({name: teamBody.team.name, description: teamBody.description, users: teamBody.users})
    })
  }
  render() {

    let userTiles = this.state.users.map(user => {
      return(
        <UserTile
        key={user.id}
        user={user}

        />
      )
    })

    return(
      <div>
      <h1 className="jsxblue"> WHAT
      {this.state.name}</h1>
      <div>
      {userTiles}
      </div>
      </div>
    );
  }
}



export default TeamShowContainer;
