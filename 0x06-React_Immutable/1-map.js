const { Map } = require('immutable');

function getImmutableObject(object) {
  const immutableMap = Map(object);
  return immutableMap;
}

module.exports = {
  getImmutableObject
};
