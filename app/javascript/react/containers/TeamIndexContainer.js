import React, {Component } from "react";
import TeamIndex from '../components/TeamIndex'

class TeamIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [ ]
    };
  }

  componentDidMount() {
    fetch('/api/v1/teams')
     .then(response => {
       if (response.ok) {
         return response;
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
             error = new Error(errorMessage);
         throw(error);
       }
     })
     .then(response => response.json())
     .then(body => {

      this.setState({teams: body});

     })
     .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

    render() {
    let teamTiles = this.state.teams.map(team => {

      return(
        <TeamIndex
          key={team.id}
          id={team.id}
          name={team.name}
          description={team.description}
         />
    )
    })
    return (
      <div>
      <h3> TEAMTILES </h3>
        {teamTiles}
      </div>
    );
  }
}






export default TeamIndexContainer
