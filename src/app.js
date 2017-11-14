import React from 'react';
import { render } from 'react-dom';

/**
 * TODO
 * 1. Wrapper (Done)
 * 2. Header (Done)
 * 3. Random CTA Button (Done)
 *  a. Randomise Logic
 * 4. Todo List Component
 *  a. Delete for each todo item
 * 5. Form input and Submit
 *  a. Not able to Submit if the todo already exists
 *  b. Localstorage implementation
 * 6. Total Decisions (DONE)
 */

/**
 * Indecision App Component
 * This is the wrapper for our application. Each component is rendered inside it.
 * @extends React.Component
 * @returns {JSX}  
 */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decisions: []
    }
  }
  render () {
    return (
      <main>
        <Header />
        <TotalDecisons total={ this.state.decisions.length } />
        <RandomiseDecisions />
        <ListOptions />
      </main>
    );
  }
}

/**
 * Header Component
 * This is a stateless header component.
 * @returns {JSX}
 */
const Header = () => <h1>Indecision App</h1>;

/**
 * RandomiseDecisions Component
 * This button will randomly select the decisions for the user.
 * @returns {JSX}
 */
const RandomiseDecisions = () => (
  <button>Randomise!</button>
);

const ListOptions = (props) => (
  <ul>
    <Option />
  </ul>
);

const Option = (props) => (
  <li>
    <span>Value</span>
    &nbsp;
    <button>Delete</button>
  </li>
);

/**
 * TotalDecisions Component
 * This will render the total number of decisions for the user.
 * @param {Obj} props 
 */
const TotalDecisons = (props) => (
  <h2>
    You have <b>{ props.total }</b> decisions.
  </h2>
);

render(<IndecisionApp />, document.getElementById('root'));
