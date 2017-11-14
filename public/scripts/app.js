'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Indecision'
        ),
        React.createElement(
          'h2',
          null,
          'Hello'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'handlePick',
    value: function handlePick() {
      alert('Handlepick');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handlePick },
        'What should I do?'
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'removeAllHandler',
    value: function removeAllHandler() {
      alert('This will remove all options!');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'i',
          null,
          'Length of options: ',
          this.props.options.length
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(
          'button',
          { onClick: this.removeAllHandler },
          'Remove All'
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Option: ',
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOptions = function (_React$Component5) {
  _inherits(AddOptions, _React$Component5);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    var _this5 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this));

    _this5.state = {
      inputVal: ''
    };
    _this5.onChangeHandler = _this5.onChangeHandler.bind(_this5);
    return _this5;
  }

  _createClass(AddOptions, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(e) {
      this.setState({
        inputVal: e.target.value
      });
    }
  }, {
    key: 'onSubmitHandler',
    value: function onSubmitHandler(e) {
      e.preventDefault();
      var val = e.target.elements.option.value;
      alert(val ? val + ' submitted!' : 'Empty Val!');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.onSubmitHandler },
        React.createElement('input', {
          type: 'text',
          name: 'option',
          value: this.state.inputVal,
          placeholder: 'Enter Some Options',
          onChange: this.onChangeHandler
        }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
  _inherits(IndecisionApp, _React$Component6);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var options = ['Thing1', 'Thing2', 'Thing3'];
      return React.createElement(
        'section',
        null,
        React.createElement(Header, null),
        React.createElement(Action, null),
        React.createElement('hr', null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOptions, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('root'));
