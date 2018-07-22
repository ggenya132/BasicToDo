import React, { Component } from "react";
import { Header } from "./component/Header";
import Input from "./component/Input";
import logo from "./logo.svg";
import Todo from "./component/ToDo";
import { FuncTodo } from "./component/FunctionalTodo";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }
  onSubmit = todo => {
    if (todo.error) {
      console.log("THERE IS AN ERROR");
      this.setState(prevState => {
        return { ...prevState, error: todo.error };
      });
    } else {
      this.setState({ todos: this.state.todos.concat(todo), error: "" });
    }
  };

  removeAll = () =>
    this.setState(prevState => {
      return { ...prevState, todos: [] };
    });

  onRemove = index => {
    const todosCopy = this.state.todos.slice();

    todosCopy.splice(index, 1);
    console.log(todosCopy);
    this.setState(prevState => {
      const filteredArray = prevState.todos.filter((todo, indexOfTodo) => {
        return indexOfTodo != index;
      });

      const derp = prevState.todos
        .slice(0, index)
        .concat(prevState.todos.splice(index + 1, prevState.todos.length));
      console.log("derp array", derp);
      return { todos: filteredArray };
    });
  };

  componentDidUpdate() {
    console.log("new state", this.state.todos);
  }
  render() {
    return (
      <div
        className="container-fluid app-container"
        style={{ height: "1400px" }}
      >
        <Header />;
        <Input onSubmit={this.onSubmit} />
        {this.state.error ? (
          <div className="error"> {this.state.error} </div>
        ) : (
          ""
        )}
        {/* {this.state.todos.map((todo, index) => {
          return <Todo onRemove={this.onRemove} todo={todo} index={index} />;
        })} */}
        {/* {this.state.todos} */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.state.todos.map((todo, index) => {
            return (
              <FuncTodo content={todo} index={index} onRemove={this.onRemove} />
            );
          })}
        </ReactCSSTransitionGroup>
        <button onClick={this.removeAll}>Remove All</button>
      </div>
    );
  }
}

export default App;
