import React from 'react';

/**
 * AddDecisions
 * This Component is responsible for Adding Decisions for the User
 */
export class AddDecisions extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      textVal: ''
    }
  }
  changeHandler (e) {
    this.setState({
      textVal: e.target.value
    })
  }
  submitHandler (e) {
    e.preventDefault();
    this.props.submitFormValue(this.state.textVal);
    this.setState({
      textVal: ''
    })
  }
  render () {
    return (
      <form>
        <input 
          type="text"
          name="decision"
          value={this.state.textVal} 
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}>Add Decision</button>
      </form>
    );
  }
}
