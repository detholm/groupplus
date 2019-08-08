import React, { Component } from "react"
// import PieChart from '../components/PieChart'
import { Chart } from 'react-google-charts';
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
// debugger
  fetch(`/api/v1/users/${this.props.match.params.id}`)
  .then(response => response.json())
  .then(data => this.setState({ user: data.user, terms: data.terms}));

}

  render(){


  return(
<div className="jsxblue">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
          }}
          graph_id="PieChart"
        />


</div>

    )
  }
}

export default UserShowContainer

// <h1>{this.state.user.first_name} </h1>
