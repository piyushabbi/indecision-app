import React from 'react';
import { render } from 'react-dom';

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
      decisions: ['Order Pizza']
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
    console.log(val);
    console.log('Old', this.state.decisions);
    
    let addedDecision = this.state.decisions.slice();    
    addedDecision.push(val);   
    this.setState({decisions:addedDecision})

    console.log('New', this.state.decisions)
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
const RandomiseDecisions = (props) => {
  return <button onClick={props.randomClickHandler}>Randomise!</button>
};

const ListOptions = (props) => (
  <ol>
    {
      props.options.map(option => <Option key={ option } text={ option } deleteHandler={props.deleteHandler}/>)
    }
  </ol>
);

const Option = (props) => (
  <li>
    <span>{ props.text }</span>
    &nbsp;
    <button onClick={(e)=>props.deleteHandler(props.text)}>Delete</button>
  </li>
);

/**
 * TotalDecisions Component
 * This will render the total number of decisions for the user.
 * @param {Obj} props 
 */
const TotalDecisons = (props) => (
  <h3>
    You have <b>{ props.total }</b> {(props.total === 1 || props.total === 0) ? 'decision' : 'decisions'} to be taken.
  </h3>
);

/**
 * Form to add descisions
 */
class AddDecisions extends React.Component {
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

render(<IndecisionApp />, document.getElementById('root'));
