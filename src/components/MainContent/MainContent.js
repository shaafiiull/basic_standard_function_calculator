import React, { Component } from "react";
import getResults from "../../utilities/getResult";
import Displayer from "../Displayer/Displayer";
import KeyBoard from "../KeyBoard/KeyBoard";

class MainContent extends Component {
  state = {
    output: "",
    result: "",
  };
  addNumber = (e) => {
    const digit = e.target.textContent;
    this.setState((state) => ({
      output: state.output + digit,
    }));
  };
  clearOutputByOneDigit = () => {
    this.setState((state) => ({
      output: state.output.slice(0, state.output.length - 1),
    }));
  };
  clearOutput = () => {
    this.setState({
      output: "",
      result: "",
    });
  };
  addOperator = (e) => {
    const operator = e.target.textContent;
    this.setState((state) => ({
      output: state.output + operator,
    }));
  };
  calculateResult = () => {
    const input = this.state.output;
    const numbers = input.split(/[-+x÷%]/);
    const opr = input.match(/[-+x÷%]/g);
    const result = getResults(numbers, opr);
    this.setState({
      result: result,
    });
  };
  render() {
    const { output, result } = this.state;
    return (
      <main className="w-100 mx-auto max-w-screen-sm p-3">
        <Displayer output={output}></Displayer>
        <KeyBoard
          addNumber={this.addNumber}
          clearOutputByOneDigit={this.clearOutputByOneDigit}
          clearOutput={this.clearOutput}
          addOperator={this.addOperator}
          calculateResult={this.calculateResult}
        ></KeyBoard>
        <h1>{Number.isNaN(result) ? "Invalid Input" : result}</h1>
      </main>
    );
  }
}

export default MainContent;
