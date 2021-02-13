import React, { Component } from "react";
import "./App.css";
import Container from "./container/Container";

export class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Parent App.js</h1>
        <article>
          App.js is a parent component meaning it is used to hold child components. Parent components can pass down data
          to children. For this example, I will pass the title of the next section "Class Child", from App.js to
          Container.js.
        </article>
        <Container title="Child Component Container.js" />
      </main>
    );
  }
}

export default App;
