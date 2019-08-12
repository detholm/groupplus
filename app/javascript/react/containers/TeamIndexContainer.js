import React, {Component } from "react";
import TeamTile from '../components/TeamTile'
import {Link} from 'react-router-dom';

class TeamIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
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
      this.setState({teams: body.teams, current_user: body.user});

     })
     .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



    render(){

    let current_user = ""
    if (this.state.current_user == undefined)  {
      current_user = ""
    } else {
      (current_user = this.state.current_user)
    }
    // if unfinded {this.state.current_user} wait for mount

    let teamTiles = this.state.teams.map(team => {
      return(
        <TeamTile
          key={team.id}
          id={team.id}
          name={team.name}
          description={team.description}
         />
    )
    })


    return (
      <div>
        <div className="linkUser">
          <Link to={{pathname: `/users/${current_user.id}`}}>View Your Results</Link>
        </div>
          <ul>
            <h2 className="title callout">{current_user.first_name} {current_user.last_name}'s  Teams</h2>
            <div className="team-wrapper">{teamTiles}</div>
          </ul>

      </div>


    );
  }
}

export default TeamIndexContainer
