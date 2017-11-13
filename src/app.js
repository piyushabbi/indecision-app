class Header extends React.Component {
  render () {
    return <div>
      <h1>Indecision</h1>
      <h2>Hello</h2>
    </div>;
  }
}

class Action extends React.Component {
  render () {
    return (
      <button>What should I do?</button>
    );
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        Some options
      </div>
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

const jsx = (
  <div>
    <Header />
    <Action />
    <hr />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx, document.getElementById('root'))
