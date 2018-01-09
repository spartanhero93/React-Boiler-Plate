"use strict";

var count = 0;
var add = function add() {
  count++;
  renderCounterApp();
};
var sub = function sub() {
  count--;
  renderCounterApp();
};
var del = function del() {
  count = 0;
  renderCounterApp();
};
var appRoot = document.getElementById("root");

var renderCounterApp = function renderCounterApp() {
  var App = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Counter: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: add },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: sub },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: del },
      "clear"
    )
  );
  ReactDOM.render(App, appRoot);
};
renderCounterApp();
