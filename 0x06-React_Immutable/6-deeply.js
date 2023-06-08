import { Map } from 'immutable':
// Create a function named mergeDeeplyElements

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
