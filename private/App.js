import React from 'react';
import { connect } from 'react-redux';

import { increaseAction } from './increaseAction';

// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}


// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connected Component:
export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
