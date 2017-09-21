export const COUNT_INCREATE = 'COUNT_INCREATE';
export const COUNT_DECREASE = 'COUNT_DECREASE';
export const COUNT_RESET = 'COUNT_RESET';

export function increase() {
  return { type: COUNT_INCREATE };
}

export function decrease() {
  return { type: COUNT_DECREASE };
}

export function reset() {
  return { type: COUNT_RESET };
}