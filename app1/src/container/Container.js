import React, { Component } from "react";
import Conditional from "../functional/Conditional";
import PropsComponent from "../functional/PropsComponent";
import State from "../functional/State";

export class Container extends Component {
  state = {
    state1: "Our initial state.",
    state2: "This state won't change.",
    state3: "This state will change!",
    state4: "I'm gonna change!",
    state5: "Me, too!",
    stateCounter: 0,
    stateCounter2: 0,
    stateCounter3: 0,
    stateCondition: true,
  };

  // wrong way

  changeStateWrong = () => {
    this.state.stateprop1 = "Our changed state";
  };

  // correct way

  changeStateCorrect = () => {
    this.setState({
      state3: "See? I changed!",
    });
  };

  // using prevState

  incrementCount = () => {
    this.setState((prevState) => ({
      stateCounter: prevState.stateCounter + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      stateCounter: prevState.stateCounter - 1,
    }));
  };

  // update multiple state properties in same component

  incrementCount2 = () => {
    this.setState((prevState) => ({
      stateCounter2: prevState.stateCounter2 + 1,
    }));
  };

  incrementCount3 = () => {
    this.setState((prevState) => ({
      stateCounter3: prevState.stateCounter3 + 2,
    }));
  };

  // update multiple state properties with one function

  doubleDuty = () => {
    this.setState({
      state4: "It worked!",
      state5: "It worked!",
    });
  };

  // conditional operator buttons

  conditionTrue = () => {
    this.setState({
      stateCondition: true,
    });
  };

  conditionFalse = () => {
    this.setState({
      stateCondition: false,
    });
  };

  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>
          The title above is being passed down from App.js through props. Props act similar to arguments passed to a
          JavaScript function. The value can be used and in this case rendered as a title. Let's talk more about props.
        </p>

        <div className="propsComponent">
          <PropsComponent topic="React Props" />
        </div>
        <div className="stateComponent">
          <State
            state={this.state.state1}
            state2={this.state.state2}
            state3={this.state.state3}
            state4={this.state.state4}
            state5={this.state.state5}
            stateCounter={this.state.stateCounter}
            stateCounter2={this.state.stateCounter2}
            stateCounter3={this.state.stateCounter3}
            wrongUpdate={() => {
              this.changeStateWrong();
            }}
            rightUpdate={() => {
              this.changeStateCorrect();
            }}
            incrementCount={() => {
              this.incrementCount();
            }}
            decrementCount={() => {
              this.decrementCount();
            }}
            incrementCount2={() => {
              this.incrementCount2();
            }}
            incrementCount3={() => {
              this.incrementCount3();
            }}
            doubleDuty={() => {
              this.doubleDuty();
            }}
          />
        </div>
        <div className="conditionalComponent">
          <Conditional />
        </div>
      </article>
    );
  }
}

export default Container;
