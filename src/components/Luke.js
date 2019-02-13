import React from "react";
import "./Luke.module.less";
import R2d2 from "./R2d2";

class Luke extends React.Component {
  render() {
    return (
        <div>
            <div className="card-luke"></div>
            <R2d2/>
        </div>
    );
  }
}

export default Luke;
