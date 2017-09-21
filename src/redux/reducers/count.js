import { COUNT_INCREATE, COUNT_DECREASE, COUNT_RESET } from '../actions/count';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case COUNT_INCREATE:
      return state + 1;
    case COUNT_DECREASE:
      return state - 1;
    case COUNT_RESET:
      return 0;
    default:
      return state;
  }
}