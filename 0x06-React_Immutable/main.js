const getImmutableObject = require('./0-fromjs');

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(object);
console.log(immutableMap);
