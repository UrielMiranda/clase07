import React from "react";
import "./App.module.less";
import Lia from "./components/Lia";
import Luke from "./components/Luke";
import { FamilyProvider } from "./utils/FamilyContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Obi Wan Kenobi",
      value: null
    };
    this.onChange = this.onChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  onChange(e) {
    this.setState({ msg: e.target.value });
  }

  sendMessage(e) {
    e.preventDefault();
    this.setState({ value: this.state.msg });
  }

  render() {
    return (
      <div className="card-container">
        <form onSubmit={this.sendMessage}>
          <input onChange={this.onChange} type="text" />
          <button type="submit">Send Message</button>
        </form>
        <Lia />
        <FamilyProvider value={this.state.value}>
          <Luke />
        </FamilyProvider>
      </div>
    );
  }
}

export default App;
