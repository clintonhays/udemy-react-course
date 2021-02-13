import React from "react";

const PropsComponent = (props) => {
  return (
    <div>
      <h2>Props</h2>
      <article>
        Container.js is the parent component of this component named PropsComponent.js. I've passed a prop to
        PropsComponent when rendering it in Container.js. The syntax looks like this:
        <div className="code">
          <pre>{`<PropsComponent topic="React Props"/>`}</pre>
        </div>
        We then access the prop using dot notation in the child component:
        <pre>{`{props.topic}`}</pre>
        And here is the rendered data {`=>`} {props.topic}.
      </article>
    </div>
  );
};

export default PropsComponent;
