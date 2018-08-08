import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  // /**
  //  * Usually used when we have an API, call to it would go in here,
  //  * if we wanna show that data in the component below.
  //  */
  // componentDidMount() {
  //   console.log('COMPONENT DID MOUNT');
  // }
  // /**
  //  * Runs before DidMount
  //  */
  // componentWillMount() {
  //   console.log('COMPONENT WILL MOUNT');
  // }
  // /**
  //  * Runs when component updates for i.e if component change state
  //  */
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // /**
  //  * Used with redux usually, we can intercept props that coming in
  //  */
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }
  // /**
  //  * Like the componentWillReceiveProps but with this below we need  *  to return either new state or null, or we will get an error
  //  */
  // static getDerivedStateFromProps(nextProps, nextState) {}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          body: data.body
        });
      });
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p className="text-secondary">{body}</p>
      </div>
    );
  }
}
export default Test;
