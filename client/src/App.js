import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";

class App extends Component {
  state = { passwords: [] };

  componentDidMount() {
    this.state = {};
    this.getPasswords();
  }

  getPasswords = () => {
    fetch("/api/password")
      .then(res => res.json())
      .then(passwords => {
        this.setState({ passwords: passwords.passwords });
      });
  };
  render() {
    const passwords = this.state.passwords;
    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
              Generally it's bad to use "index" as a key.
              It's ok for this example because there will always
              be the same number of passwords, and they never
              change positions in the array.
            */}
              {passwords.map((password, index) => (
                <li className="password" key={index}>
                  {password}
                </li>
              ))}
            </ul>
            <button className="more" onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button className="more" onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
