var KeyActions = require('../actions/KeyActions');


module.exports = {

keyUp: $(document).on("keyup", function (e) {
  e.preventDefault();
  var note = Mapping[e.keyCode];
  KeyActions.keyReleased(note);
}),

keyDown: $(document).on("keydown", function(e) {
  e.preventDefault();
  var note = Mapping[e.keyCode];
  KeyActions.keyPressed(note);
}),

mouseUp: $(document).on("mouseup", function (e) {
  e.preventDefault();
  var note = e.toElement.id;
  KeyActions.keyReleased(note);
}),

mouseDown: $(document).on("mousedown", function(e) {
  e.preventDefault();
  var note = e.toElement.id;
  KeyActions.keyPressed(note);
})

};


var Mapping = {
  //white keys
  9: "C4",
  81: "D4",
  87: "E4",
  69: "F4",
  82: "G4",
  84: "A4",
  89: "B4",
  85: "C5",
  73: "D5",
  79: "E5",
  80: "F5",
  219: "G5",
  221: "A5",
  220: "B5",
  //black keys
  49: "Db4",
  50: "Eb4",
  52: "Gb4",
  53: "Ab4",
  54: "Bb4",
  56: "Db5",
  57: "Eb5",
  189: "Gb5",
  187: "Ab5",
  8: "Bb5"
};


// e.keyCode
