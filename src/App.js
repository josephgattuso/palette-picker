import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Palette Picker
          <span role="img" aria-label="art"> 🎨</span>
        </h1>
        <Palette {...seedColors[0]} />
      </div>
    );
  }
}

export default App;