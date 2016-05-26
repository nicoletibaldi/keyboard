var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track({name: "", roll: []})};
  },

  render: function () {
    var innerText;
    var klass;
    if (this.state.isRecording) {
      innerText = "■";
      klass = "stop";
    } else {
      innerText = "●";
      klass = "start";
    }
    return(
      <div className="recorderbox">
      <button onClick={this.handleClick} className={"record " + klass}>{innerText}</button>
      <button onClick={this.handlePlay} className="play">▶</button>
      </div>
    );
  },

  trackNotes: function () {
    this.state.track.addNotes();
  },

  handleClick: function () {
    if (this.state.isRecording) {
      this.state.track.stopRecording();
      this.token.remove();
      this.setState({isRecording: false});
    } else {
      this.state.track.startRecording();
      this.token = KeyStore.addListener(this.trackNotes);
      this.setState({isRecording: true});
    }
  },

  handlePlay: function () {
    this.state.track.play();
  }
});

module.exports = Recorder;
