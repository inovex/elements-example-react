import React from 'react';
import logo from './logo.svg';
// example import Icon
import { ReactComponent as AddIcon } from '@inovex/elements/dist/inovex-elements/icon-assets/SVG/add.svg';
import { InoButton, InoDatepicker, InoInput } from './shared/InovexElements';
import './App.css';

const App: React.FC = () => {
  const [newTodoName, setTodoName] = React.useState('Initial value');
  const [todos, setTodos] = React.useState(['Todo1', 'Todo2', 'Todo3']);

  const onValueChanged = (value: CustomEvent<string>) => {
    setTodoName(value.detail);
  };

  const addTodo = () => {
    setTodos([...todos, newTodoName]);
    setTodoName('');
  };

  const deleteTodo = (index: number, todo: string) => {
    const filteredTodos = todos.filter(currentTodo => currentTodo !== todo);
    setTodos([...filteredTodos]);
  };

  const todoActionTemplate = () => {
    return (
      <div className="action-box">
        <InoInput
          type="text"
          value={newTodoName}
          onValueChange={value => onValueChanged(value)}
          placeholder="What needs to be done..."
        />
        <InoButton onClick={(ev: any) => addTodo()} icon-right="add">
          Add
        </InoButton>
      </div>
    );
  };

  const todoListTemplate = () => {
    return (
      <ul className="todos">
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}

              <InoButton onClick={() => deleteTodo(index, todo)}>
                Delete
              </InoButton>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <InoDatepicker />
        <InoButton>
          <AddIcon style={{ fill: 'red' }} /> Add
        </InoButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Todo test</h1>
      {todoActionTemplate()}
      {todoListTemplate()}
    </div>
  );
};

export default App;
