class Header extends React.Component {
  render () {
    return <div>
      <h1>Indecision</h1>
      <h2>Hello</h2>
    </div>;
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Handlepick')
  }
  render () {
    return (
      <button onClick={this.handlePick}>What should I do?</button>
    );
  }
}

class Options extends React.Component {
  removeAllHandler() {
    alert('This will remove all options!');
  }
  render () {
    return (
      <div>
        <i>Length of options: {this.props.options.length}</i>
        {
          this.props.options.map( option => <Option key={option} optionText={option} /> )
        }
        <button onClick={ this.removeAllHandler }>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>Option: { this.props.optionText }</div>
    );
  }
}

class AddOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      inputVal: e.target.value
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const $val = e.target.elements.option.value; 
    console.log( $val ? $val : 'Empty Val!' ); 
  }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="option"
          value={this.state.inputVal}
          placeholder="Enter Some Options"
          onChange={this.onChangeHandler}
        />
        <button>Add Option</button>
      </form>
    );
  }
}

class IndecisionApp extends React.Component {
  render () {
    const options = ['Thing1', 'Thing2', 'Thing3']
    return (
      <section>
        <Header />
        <Action />
        <hr />
        <Options options={options} />
        <AddOptions />
      </section>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))
