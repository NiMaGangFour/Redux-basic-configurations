export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_5 = "ADD_5";
export const SUBTRACT_5 = "SUBTRACT_5";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = value => {
  return {
    type: ADD_5,
    value: value
  };
};
export const subtract = value => {
  return {
    type: SUBTRACT_5,
    value: value
  };
};
export const saveResult = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};
export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const deleteResult = resultElId => {
  return {
    type: DELETE_RESULT,
    resultElId: resultElId
  };
};
