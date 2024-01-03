import {ref, shallowRef} from "vue";

// wrapper for ref to make it more like useState
export function useState<T>(initialValue: T) {
  const state = shallowRef(initialValue);

  const setState = (value: T) => {
    state.value = value;
  };

  const getState = () => {
    return state.value;
  }

  return [getState, setState] as const;
}