import React, { Component } from 'react';

class Test extends Component {
  /**
   * Usually used when we have an API, call to it would go in here,
   * if we wanna show that data in the component below.
   */
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }
  /**
   * Runs before DidMount
   */
  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }
  /**
   * Runs when component updates for i.e if component change state
   */
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /**
   * Used with redux usually, we can intercept props that coming in
   */
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }
  /**
   * Like the componentWillReceiveProps but with this below we need  *  to return either new state or null, or we will get an error
   */
  // static getDerivedStateFromProps(nextProps, nextState) {

  // }
  render() {
    return (
      <div>
        <h1>Test!</h1>
      </div>
    );
  }
}
export default Test;
