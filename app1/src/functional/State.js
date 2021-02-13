import React from "react";

const State = ({
  state,
  state2,
  state3,
  state4,
  state5,
  stateCounter,
  stateCounter2,
  stateCounter3,
  wrongUpdate,
  rightUpdate,
  incrementCount,
  decrementCount,
  incrementCount2,
  incrementCount3,
  doubleDuty,
}) => {
  return (
    <article>
      <section>
        <h2>State</h2>
        <p>
          The state of a component is essentially the temporary data the component uses. State can be any form of data,
          but should be able to be updated. To access state in jsx, we use the 'this' key word. Here is the state of
          Container: <b>{state}</b>.
        </p>
      </section>
      <h2>Updating State</h2>
      <section>
        <h3>Incorrect</h3>
        <p>
          State should NEVER be mutated directly. For example; the button below <i>should</i> call a function that
          changes state directly. However, it doesn't work because React doesn't allow direct change of state. It would
          leave us no access to the previous state, it would mutate the state. Instead, we use the{" "}
          <code>setState()</code> method.
        </p>
        <button onClick={wrongUpdate}>I don't work!</button>
        <p>
          <b>{state2}</b>
        </p>
      </section>
      <section>
        <h3>Correct</h3>
        <p>
          To update state correctly, we use the <code>setState()</code> method. This is a method on the component class
          that allows us to update state and merge the old state with the new. This means we do not mutate the original
          state, but merge it with the new state. This has the same effect, but still allows us to access the previous
          state. The button below calls a function that uses the <code>setState()</code> method, click it and see the
          state update across the page.
        </p>
        <button onClick={rightUpdate}>I do work!</button>
        <p>
          <b>{state3}</b>
        </p>
      </section>
      <section>
        <h3>PrevState</h3>
        <p>
          It may be beneficial to update state based on the previous state. This is most easily recognizable in a simple
          counter. To demonstrate this we will initialize a state of '0', then we will increment or decrement it by 1
          when the button is clicked. This works because we are updating a reference to the previous state's data. In
          this case it starts as 0 then is updated accordingly. Every click of the button then updates the new state.
        </p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <p>
          <b>{stateCounter}</b>
        </p>
      </section>
      <section>
        <h3>Updating Multiple States in One Component</h3>
        <p>
          Since React merges the previous component state with the new component state it is possible to update
          individual properties in each component state. For example, our Container.js component currently has several
          states. We will add two more states that are both initialized to 0. Since state is an object, we can say that
          these are both properties of the same object. React's merging allows us to manipulate one state without
          effecting the other. Below are two buttons and the displays of our two new states. When clicking either
          button, the state that is affected by that button is updated and merged with the old state. We know this is
          the case since the counters don't reset to 0.
        </p>
        <button onClick={incrementCount2}>Increment by 1</button>
        <p>
          <b>{stateCounter2}</b>
        </p>
        <button onClick={incrementCount3}>Increment by 2</button>
        <p>
          <b>{stateCounter3}</b>
        </p>
      </section>
      <section>
        <h3>Updating Multiple States in one setState() Call</h3>
        <p>
          Below is a button that will update two states. This works because state is an object, so we can target
          multiple properties when using <code>setState()</code>. For this example two properties were passed into the{" "}
          <code>setState()</code> method.
        </p>
        <button onClick={doubleDuty}>Change 2 States</button>
        <p>
          <b>
            {state4} <br />
            {state5}
          </b>
        </p>
      </section>
      <section>
        <h3>State as Props</h3>
        <p>
          In all of the examples above, the state resides in Container.js and is passed down to State.js as props. While
          this isn't necessarily best practice overall since the state is only needed in State.js, we can use our
          current architecture to demonstrate two very important concepts in React. The first concept is determining a
          single "source of truth". This means there should be one home for state in your React app. Usually this means
          the top level component of your app, but it could be wherever you determine is best. The second concept it
          unidirectional data flow. This idea, in React, is that data should flow from the top down. Our current
          component tree would look something like this App.js {">"} Container.js {">"} State.js. At the top of our tree
          is App.js which can pass data down to Container.js AND State.js. Next, Container.js can pass data to State.js
          and any other child components we decide to add.
        </p>
        <h3>Lifting State Up</h3>
        <p>
          The two concepts mentioned above lead us to another that is prominent in React; lifting state up. The idea
          behind lifting state up is that if there are multiple components that rely on the same data, that data should
          be stored in and passed down from the closest common ancestor of the child components. In our case, if we had
          another component, State2.js, that was a sibling of State.js, the closest common ancestor would be
          Container.js and therefore, any shared state between State.js and State2.js should be stored in and passed
          down from Container.js.
        </p>
        <h3>Passing Data to a Parent</h3>
        <p>
          The idea of passing data from a deeply nested React component to a parent is something that does require some
          more gymnastic thinking. While it isn't necessarily a difficult concept to grasp, it isn't a pattern that
          we're used to thinking about in vanilla JS. We use call back functions to make the data flow up the component
          tree. First, create a callback function in the parent that accepts the child data as a parameter. Pass this
          function as a prop to the child. In the child create a function that calls the callback function from the
          parent with the data you need to send to the parent. Reading or writing it is a bit abstract, but using it in
          practice is quite simple and straightforward.
        </p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          While this is a concise overview of props and state in React, it attempts to demonstrate some of the
          complexities. Ultimately, the best teacher is practice. Try building a few parent and child components on your
          own and passing state between them. This is one of most foundational concepts of React and is absolutely
          necessary to understand to become comfortable with React.
        </p>
      </section>
    </article>
  );
};

export default State;
