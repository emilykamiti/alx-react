const { fromJS } = require('immutable');

function getImmutableObject (object) {
  const immutableMap = fromJS(object);
  return immutableMap;
}

module.exports = getImmutableObject;
