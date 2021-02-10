import React from "react";

const component1 = (props) => {
  return (
    <div>
      Component1.js <h2>Prop</h2>
      <p>
        The name prop on the render of Component1 in App.js passes down the information to the actual Component1.{" "}
        {props.name} {"<="} This is the prop. {props.age} {"<="} This is another prop.
      </p>
    </div>
  );
};

export default component1;
