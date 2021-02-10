// function App() {
//   const name = "Clinton";
//   return (
//     <div className="App">
//       <header className="App-header">{name}</header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Component1 from "./functional/Component1";
import Container from "./container/Container";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Parent</h1>
        App.js
        <h1>Class Child</h1>
        <Container nick="Clint" />
        <h1>Functional Child</h1>
        <Component1 name="Clinton" age="36" />
      </div>
    );
  }
}

export default App;
