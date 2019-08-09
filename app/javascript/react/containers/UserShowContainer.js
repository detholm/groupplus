import React, { Component } from "react"
// import PieChart from '../components/PieChart'

import { Chart } from "react-google-charts";

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

    var output = [["Term", "count"]]
    const uniqueTerms = new Set();
    this.state.terms.forEach(function(element){
      uniqueTerms.add(element.term);
    });

  let uniqueValueArray = Array.from(uniqueTerms);
    for(var i =0; i < uniqueValueArray.length; i++){
      let count = 0;
      for(var j =0; j< this.state.terms.length;j++){
      if(uniqueValueArray[i] === this.state.terms[j].term){
        count++;
        }
      }
      output.push([uniqueValueArray[i], count]);
      count = 0;
    }


  return(
    <div>
    <h1 className="jsxblue">{this.state.user.first_name}</h1>
    <Chart
          chartType="PieChart"
          data={output}

          graph_id="PieChart"
          width={"100%"}
          height={"800px"}
          legend_toggle
        />
    </div>


    )
  }
}

export default UserShowContainer

// <h1>{this.state.user.first_name} </h1>
