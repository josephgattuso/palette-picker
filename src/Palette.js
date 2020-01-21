import React, { Component } from "react"
import ColorBox from "./ColorBox"
import "./Palette.css"

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      // eslint-disable-next-line react/jsx-key
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer goes here */}
      </div>
    )
  }
}

export default Palette
