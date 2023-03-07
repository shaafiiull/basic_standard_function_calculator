import React, { Component } from "react";

class Displayer extends Component {
  render() {
    const { output } = this.props;
    return (
      <div
        className="h-auto border border-slate-500 overflow-hidden break-words"
        style={{ minHeight: "60px" }}
      >
        {output}
      </div>
    );
  }
}

export default Displayer;
