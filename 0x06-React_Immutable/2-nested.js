import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const value = Map(object);
  return value.getIn(array);
}
