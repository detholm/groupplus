import React, { Component } from 'react'

function toggleCheckbox(index) {
    const {checkboxes} = this.state;

    checkboxes[index].checked = !checkboxes[index].checked;

    this.setState({
        checkboxes
    });
}

function renderCheckboxes() {
    const {checkboxes} = this.state;
    console.log('this is props' + JSON.stringify(this.props));


    return checkboxes
    this.props.map((checkbox, index) =>
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={toggleCheckbox.bind(this, index)}
                />
                {checkbox.label}
            </label>
        </div>
    );
}

class CheckBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
    checkboxes: []
  }
}

  render() {

    //console.log('this is props for checkbox' +JSON.stringify(this.props));

    return(
      <div>
          {renderCheckboxes.call(this)}
          <input ref="label" type="text"/>
          <div>
          </div>
      </div>

    )
  }
}
