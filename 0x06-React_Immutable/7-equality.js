import { is } from 'immutable';

// Create a function named areMapsEqual

export default function areMapsEqual (map1, map2) {
  return is(map1, map2);
}
