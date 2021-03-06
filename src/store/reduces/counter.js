import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case actionTypes.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case actionTypes.ADD_5: {
      return {
        ...state,
        counter: state.counter + action.value
      };
    }
    case actionTypes.SUBTRACT_5: {
      return {
        ...state,
        counter: state.counter - action.value
      };
    }
  }
  // the following state is current state  is not the initial state
  return state;
};

export default reducer;
