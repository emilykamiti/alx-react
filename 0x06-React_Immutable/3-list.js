import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const arrList = List(list):
  return arrList.withMutations((list) => list.push(element));
}
