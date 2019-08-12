const redux = require("redux"); //This is nodeJS syntas for importing redux;
const createStore = redux.createStore; // createStore allows us to create a new redux store

const initialState = {
  counter: 0
};
// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};
// Store

const store = createStore(rootReducer);

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
// Subscription
