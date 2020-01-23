import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(generatePalette(seedColors[0]));
    return (
      <div>
        <Palette palette={generatePalette(seedColors[0])} />      </div>
    )
  }
}

export default App
