var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {

  keyPressed: function (note) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: note
    });
  },

  keyReleased: function (note) {
    Dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: note
    });
  },

  playBack: function (notes) {
    Dispatcher.dispatch({
      actionType: "PLAYBACK",
      noteArr: notes
    });
  }

};
