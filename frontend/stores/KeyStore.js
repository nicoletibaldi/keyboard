var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var _keys = [];

var KeyStore = new Store(Dispatcher);

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "KEY_PRESSED":
      if (!_keys.includes(payload.noteName)){
        _keys.push(payload.noteName);
        KeyStore.__emitChange();
      }
      break;
    case "KEY_RELEASED":
      _keys.splice(_keys.indexOf(payload.noteName), 1);
      KeyStore.__emitChange();
      break;
    case "PLAYBACK":
      _keys = payload.noteArr;
      KeyStore.__emitChange();
      break;
  }
};



module.exports = KeyStore;
