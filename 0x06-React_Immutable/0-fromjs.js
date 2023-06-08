const Immutable = require('immutable');

function getImmutableObject (object) {
  return Immutable.fromJS(object);
}

module.exports = getImmutableObject;
