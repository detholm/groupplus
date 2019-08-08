import React, { Component } from "react"
// import PieChart from '../components/PieChart'

// import { Chart } from 'react-google-charts';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      terms: []
    }
  }

  componentDidMount(){
  let userID = this.props.match.params.id


  fetch(`/api/v1/users/${this.props.match.params.id}`)
  .then(response => response.json())
  .then(data => this.setState({ user: data.user, terms: data.terms}));

}

  render(){
  return(
    <div>
    <h1 className="jsxblue">{this.state.user.first_name}</h1>

    </div>

    )
  }
}

export default UserShowContainer

// <h1>{this.state.user.first_name} </h1>
