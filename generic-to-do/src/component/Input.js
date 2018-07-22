import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = event => {
    event.preventDefault();
    console.log((event.target.elements.todo.value = ""));
    if (this.state.todo == undefined || this.state.todo == "") {
      this.props.onSubmit({ error: "Please enter a todo" });
    } else {
      this.props.onSubmit(this.state.todo);
      this.setState({ todo: "" });
    }
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            name="todo"
            type="text"
            placeholder="Enter a To Do"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
