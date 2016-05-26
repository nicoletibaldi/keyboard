var React = require('react');
var Note = require('../util/Note');
var Tones = require('../constants/Tones');
var KeyStore = require('../stores/KeyStore');


var OrganKey = React.createClass({
  getInitialState: function () {
    return {status: "off"};
  },

  componentDidMount: function() {
    var noteName = Tones.TONES[this.props.noteName];
    this.note = new Note(noteName);
    this.token = KeyStore.addListener(this.keyStroke);
  },

  keyStroke: function () {
    if (KeyStore.all().includes(this.props.noteName)){
      this.note.start();
      this.setState({status: "on"});
    } else {
      this.note.stop();
      this.setState({status: "off"});
    }},

    componentWillUnmount: function () {
      this.note.stop();
      this.token.remove();
    },

    render: function () {
      var klass;
      if (this.state.status === "on" && this.props.noteName.length === 2) {
        klass = "key on";
      } else if (this.state.status === "off" && this.props.noteName.length === 2){
        klass = "key";
      } else if (this.state.status === 'on' && this.props.noteName.length === 3) {
        klass = "key flat on2";
      } else {
        klass = "key flat";
      }
      return (
        <li className={klass} id={this.props.noteName}/>
      );
    }
});

module.exports = OrganKey;
