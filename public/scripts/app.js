"use strict";

console.log("App js Running !");

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Piyush"
  ),
  React.createElement(
    "p",
    null,
    "Age: 26"
  ),
  React.createElement(
    "p",
    null,
    "Location: Bengaluru"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Play Basketball"
    )
  )
);

ReactDOM.render(template2, document.getElementById("root"));
