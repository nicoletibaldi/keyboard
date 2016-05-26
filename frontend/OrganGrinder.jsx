// var Dispatcher = require('./dispatcher/Dispatcher');
// Note = require('./util/Note');
KeyListener = require('./util/KeyListener');
var React = require('react');
var ReactDOM = require('react-dom');
var OrganKey = require('./components/OrganKey');
var Organ = require('./components/Organ');
var Recorder = require('./components/Recorder');

var OrganGrinder = React.createClass({
  render: function () {
    return (
      <div>
        <Organ/>
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<OrganGrinder />, document.getElementById('content'));
});
