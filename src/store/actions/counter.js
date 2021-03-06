import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = value => {
  return {
    type: actionTypes.ADD_5,
    value: value
  };
};
export const subtract = value => {
  return {
    type: actionTypes.SUBTRACT_5,
    value: value
  };
};
