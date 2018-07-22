import React, { Component } from "react";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    let { todo, onRemove } = props;
    this.state = { todo };
    this.propsOnRemove = onRemove;
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  onRemove = () => {
    this.propsOnRemove(this.props.index);
  };

  render() {
    return (
      <div>
        <h1>{this.state.todo}</h1>;
        <button onClick={this.onRemove}>X</button>
      </div>
    );
  }
}
