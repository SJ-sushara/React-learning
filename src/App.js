import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

const TodoComponent = styled.div`
  background-color: red;
  width: 300px;
  min-height: 200px;
  margin: 30px auto;
  box-sizing: border-box;

  &:hover {
    background-color: yellow;
  }
`;

const BasicNotification = styled.p`
  background: lightblue;
  padding: 5px;
  margin: 5px;
  color: black;
`;

const SuccessNotification = styled(BasicNotification)`
  background: lightgreen;
`;

const ErrorNotification = styled(BasicNotification)`
  background: lightcoral;
  font-weight: bold;
`;

class App extends Component {
  render() {
    return (
      <TodoComponent>
        <h2>ToDo</h2>
        {/* <div>
          <Input onChange={this.handleChange} />
          <p>{this.state.error}</p>
          <ToDoList value={this.state.display} />
        </div> */}
        <BasicNotification>Basic Message</BasicNotification>
        <SuccessNotification>Success Message</SuccessNotification>
        <ErrorNotification>Error Message</ErrorNotification>
      </TodoComponent>
    );
  }
}

export default App;
