import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.map((value, key) => {
  if (key == 3) value = "Benjamin"
  if (key == 5 valu = "Oliver"
})
