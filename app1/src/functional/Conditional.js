import React, { useState } from "react";

const Conditional = () => {
  const [state, setState] = useState(true);
  return (
    <section>
      <h2>Conditionally Render JSX</h2>
      <p>
        We can render JSX elements conditionally. This is a very useful feature. But, there is a right way and a wrong
        way to go about it. Since JSX is essentially just JavaScript, we could write an if...else statement directly in
        our return statement and return the element we want based on the condition. However, we have access to an
        expression called the <i>conditional operator</i> or <i>ternary operator</i>. This expression takes three
        operands and is written on a single line. It evaluates a condition and then returns a certain value depending on
        the truthiness or falsiness of the condition. It is written like this: <br />
        <code>condition ? return value if true : return value if false</code>
        <br />
        To see this in action, click the toggle button below. This button calls a function that switches the component
        state between true and false. If state is true a thumbs up is displayed. If state is false a thumbs down is
        displayed. <br />
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          Toggle
        </button>
        <br />
        <div>{state ? "👍" : "👎"}</div>
        <br />
        The state updates cause the div to render according to the conditional operator written like this:{" "}
        <pre>{`<div>{state ? "👍" : "👎"}</div>`}</pre>
      </p>
    </section>
  );
};

export default Conditional;
