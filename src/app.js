import React from 'react';
import { render } from 'react-dom';

import { Header } from './Header.js';
import { RandomiseDecisions } from './RandomiseDecisions.js';
import { ListOptions } from './ListOptions.js';
import { TotalDecisons } from './TotalDecisions.js';
import { AddDecisions } from './AddDecisions.js';
/**
 * Indecision App Component
 * This is the wrapper for our application. Each component is rendered inside it.
 * @extends React.Component
 * @returns {JSX}  
 */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.randomiseHandler = this.randomiseHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.submitFormValue = this.submitFormValue.bind(this);
    this.state = {
      decisions: []
    }
  }
  randomiseHandler () {
    let randomText = this.state.decisions[Math.floor(Math.random() * this.state.decisions.length)];
    alert(randomText);
  }
  deleteHandler(val) {
    let text = this.state.decisions.filter(option => option!=val);
    this.setState({
      decisions: text
    })
  }
  submitFormValue (val) {    
    let addedDecision = this.state.decisions.slice();    
    addedDecision.push(val);   
    this.setState({decisions:addedDecision})
  }
  render () {
    return <section>
        <Header />
        <TotalDecisons total={this.state.decisions.length} />
        {
          this.state.decisions.length 
          ? <RandomiseDecisions randomClickHandler={this.randomiseHandler} />
          : ''
        }
        <ListOptions options={this.state.decisions} deleteHandler={this.deleteHandler}/>
        <AddDecisions text={this.state.formVal} submitFormValue={this.submitFormValue}/>
      </section>;
  }
}

render(<IndecisionApp />, document.getElementById('root'));
