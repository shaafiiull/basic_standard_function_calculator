import React, { Component } from "react";

class KeyBoard extends Component {
  render() {
    const digits = [
      {
        id: 1,
        digit: ".",
      },
      {
        id: 2,
        digit: "00",
      },
      {
        id: 3,
        digit: "0",
      },
      {
        id: 4,
        digit: "1",
      },
      {
        id: 5,
        digit: "2",
      },
      {
        id: 6,
        digit: "3",
      },
      {
        id: 7,
        digit: "4",
      },
      {
        id: 8,
        digit: "5",
      },
      {
        id: 9,
        digit: "6",
      },
      {
        id: 10,
        digit: "7",
      },
      {
        id: 11,
        digit: "8",
      },
      {
        id: 12,
        digit: "9",
      },
    ];
    const operators = [
      {
        id: 1,
        symbol: "+",
      },
      {
        id: 2,
        symbol: "-",
      },
      {
        id: 3,
        symbol: "x",
      },
      {
        id: 4,
        symbol: "÷",
      },
      {
        id: 5,
        symbol: "=",
      },
    ];
    const {
      addNumber,
      clearOutputByOneDigit,
      clearOutput,
      addOperator,
      calculateResult,
    } = this.props;
    return (
      <div>
        <div className="flex flex-row border border-slate-500 border-t-0 text-5xl">
          <h1
            className="border-r-2 border-solid border-red-200 basis-1/2 bg-red-400 cursor-pointer"
            onClick={clearOutputByOneDigit}
          >
            C
          </h1>
          <h1
            className="basis-1/2 bg-lime-300 cursor-pointer"
            onClick={clearOutput}
          >
            AC
          </h1>
        </div>
        <div className="flex flex-row border-2">
          <div className="border-r-2 border-solid border-red-200 grid grid-cols-3 gap-2 basis-1/2">
            {digits.map((digit) => (
              <p
                key={digit.id}
                className="bg-fuchsia-600 py-2 cursor-pointer font-bold		"
                onClick={addNumber}
              >
                {digit.digit}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 basis-1/2">
            {operators.map((opr) => (
              <p
                onClick={opr.id === 5 ? calculateResult : addOperator}
                key={opr.id}
                className="bg-orange-400 py-2 cursor-pointer text-4xl"
                style={{
                  gridColumn: `${opr.id === 5 ? "1/3" : "1/"}`,
                }}
              >
                {opr.symbol}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default KeyBoard;
