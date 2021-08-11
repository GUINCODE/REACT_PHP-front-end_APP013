import React, { Component } from "react";

class Wellcome extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center d-flex justify-content-center align-items-center mx-auto">
          <div className="react">React JS</div> + <div className="php">PHP</div>{" "}
          + <div className="mysql">MySQL</div>
        </h1>
      </div>
    );
  }
}

export default Wellcome;
