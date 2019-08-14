import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtract5Counter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(storeResult => (
            <li
              key={storeResult.id}
              onClick={() => this.props.onDeleteResult(storeResult.id)}
            >
              {storeResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdd5Counter: () => dispatch({ type: "ADD_5", value: 5 }),
    onSubtract5Counter: () => dispatch({ type: "SUBTRACT_5", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULT", resultElId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// export default connect(null, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, null)(Counter);
