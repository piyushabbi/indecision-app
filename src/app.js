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
  render () {
    return (
      <div>
        Add Options Component Here 
      </div>
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
