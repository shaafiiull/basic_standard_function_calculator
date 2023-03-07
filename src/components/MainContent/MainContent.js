import React, { Component } from "react";
import Displayer from "../Displayer/Displayer";
import KeyBoard from "../KeyBoard/KeyBoard";

class MainContent extends Component {
  state = {
    output: "",
  };
  render() {
    const { output } = this.state;
    return (
      <main className="w-100 mx-auto max-w-screen-sm p-3">
        <Displayer output={output}></Displayer>
        <KeyBoard></KeyBoard>
      </main>
    );
  }
}

export default MainContent;
