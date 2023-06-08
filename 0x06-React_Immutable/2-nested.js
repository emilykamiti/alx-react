import { Map } from 'immutable';

export default function accessImmutableObject (object, array) {
  const immutableObject = Map(object);
  return immutableObject.getIn(array, undefined);
}
