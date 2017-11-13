console.log('App js Running !');

// JSX
var template = React.createElement(
  "h1",
  { id: "heading", className: "heading", "data-heading": "heading" },
  "This is a jsx"
);

ReactDOM.render(template, document.getElementById('root'));