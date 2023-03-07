import React, { Component } from "react";

class Displayer extends Component {
  render() {
    const { output } = this.props;
    return <div className="h-14 border border-slate-500">{output}</div>;
  }
}

export default Displayer;
