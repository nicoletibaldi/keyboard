var KeyStore = require('../stores/KeyStore');
var KeyActions = require("../actions/KeyActions");

var Track = function (attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.time = new Date();
};

Track.prototype.addNotes = function (arr) {
  if (arr === undefined) {
    arr = KeyStore.all();
  }
  var currentTime = new Date();
  this.roll.push({timeSlice: currentTime - this.time, notes: arr});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }
  var playBackStartTime = new Date();
  var currentNote = 0;
  this.interval = setInterval(function () {
    if (currentNote < this.roll.length) {
      if ((Date.now() - playBackStartTime) > this.roll[currentNote].timeSlice) {
        KeyActions.playBack(this.roll[currentNote].notes);
        currentNote++;
      }
    } else {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }.bind(this), 10);
};

module.exports = Track;
