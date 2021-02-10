import React, { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateprop1: "Our initial state",
      stateCounter: 0,
    };
  }

  // wrong way

  changeStateWrong = () => {
    this.state.stateprop1 = "Our changed state";
  };

  // correct way

  changeStateCorrect = () => {
    this.setState({
      stateprop1: "Correctly updated state!",
    });
  };

  // using prevState

  incrementCount = () => {
    this.setState((prevState, props) => ({
      stateCounter: prevState.stateCounter + 1,
    }));
  };

  render() {
    return (
      <div>
        Container.js <h2>Props</h2>
        <p>
          The name prop on the render of Container in App.js passes down the information to the actual Container. <br />
          {this.props.nick} {"<="} This is the prop.
        </p>
        <h2>State</h2>
        <p>
          The state of a component is essentialy the temporary data the component uses. State can be any form of data,
          but should be able to be updated. To access state in jsx, we use the 'this' key word. Here is the state of
          Container: <b>{this.state.stateprop1}</b>.
        </p>
        <h2>Updating State</h2>
        <h3>Incorrect</h3>
        <p>
          State should NEVER be mutated directly. For example; the button below <i>should</i> call a function that
          changes state directly. However, it doesn't work becuase React doesn't allow direct change of state. It would
          leave us no access to the previous state, it would mutate the state. Instead, we use the{" "}
          <code>setState()</code> method.
        </p>
        <button
          onClick={() => {
            this.changeStateWrong();
          }}
        >
          Change State Directly
        </button>
        <p>
          <b>{this.state.stateprop1}</b>
        </p>
        <h3>Correct</h3>
        <p>
          To update state correctly, we use the <code>setState()</code> method. This is a method on the component class
          that allows us to update state and merge the old state with the new. This means we do not mutate the original
          state, but merge it with the new state. This has the same effect, but still allows us to access the previous
          state. The button below calls a function that uses the <code>setState()</code> method, click it and see the
          state update across the page.
        </p>
        <button
          onClick={() => {
            this.changeStateCorrect();
          }}
        >
          Change State by setState()
        </button>
        <p>
          <b>{this.state.stateprop1}</b>
        </p>
        <h3>PrevState</h3>
        <p>
          It may be beneficial to update state based on the previous state. This is most easily recognizable in a simple
          counter. To demonstate this we will initialize a state of '0', then we will increment it by 1 when the button
          is clicked.
        </p>
        <button
          onClick={() => {
            this.incrementCount();
          }}
        >
          Increment
        </button>
        <p>
          <b>{this.state.stateCounter}</b>
        </p>
      </div>
    );
  }
}

export default Container;
