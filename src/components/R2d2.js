import React from "react";
import "./r2d2.module.less";
import { FamilyConsumer } from "../utils/FamilyContext";

class R2d2 extends React.Component {
  render() {
    return (
      <div>
        <FamilyConsumer>
          {context => <div className="card-r2">{context}</div>}
        </FamilyConsumer>
      </div>
    );
  }
}

export default R2d2;
