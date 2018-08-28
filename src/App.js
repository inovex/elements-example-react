import React, { Component } from 'react';
import './App.css';
import { InoButton } from '@inovex/elements/dist/react/InoButton';
import { InoInput } from '@inovex/elements/dist/react/InoInput';

export class Todo {
  constructor(name) {
    this.name = name;
  }
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      newTodoName: 'Initial value',
      todos: [
        new Todo('TODO 1'),
        new Todo('TODO 2'),
        new Todo('TODO 3')
      ]
    };
  }

  onValueChanged(value) {
    this.setState({newTodoName: value});
  }

  add() {
    this.state.todos.push(new Todo(this.state.newTodoName));
    this.setState({newTodoName: ''});
  }

  delete(index, todo) {
    const todos = this.state.todos.filter(currentTodo => currentTodo !== todo);
    this.setState({todos: todos});
  }


  todoActionTemplate() {
    return (
      <div className="action-box">
        <InoInput
          type="text" 
          value={this.state.newTodoName} 
          onKeyUp={(ev) => this.onValueChanged(ev.target.value)} 
          placeholder="What needs to be done..."></InoInput>
        <InoButton onClick={(ev) => this.add(ev)} icon-right="add">Add</InoButton>
      </div>
    );
  }


  todoListTemplate() {
    return (
      <ul className="todos">
        { this.state.todos.map((todo, index) => {
            return <li key={index}>
              {todo.name} 
              <InoButton onClick={() => this.delete(index, todo)}>Delete</InoButton>
            </li>;
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <h2>Simple TODO</h2>

        <div className="app-wrapper">
          {this.todoActionTemplate()}
          {this.todoListTemplate()}
        </div>
      </div>
    );
  }
}

export default App;
