import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const value = fromJS(object);
  return value.getIn(array);
}
