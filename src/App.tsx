import React from 'react';
import './App.css';
import { InoCheckbox, InoIcon, InoInput, InoList, InoListDivider, InoListItem } from './shared/InovexElements';

const App: React.FC = () => {

  const [newTodoName, setTodoName] = React.useState('');

  const [todos, setTodos] = React.useState<string[]>([]);
  const [doneTodos, setDoneTodos] = React.useState<string[]>([]);


  const onValueChanged = (value: CustomEvent<string>) => {
    setTodoName(value.detail);
  };

  const addTodo = () => {
    if (newTodoName && newTodoName.length !== 0) {
      setTodos([...todos, newTodoName]);
      setTodoName('');
    }
  };

  const doTodo = (todo: string) => {
    const filteredTodos = todos.filter(currentTodo => currentTodo !== todo);
    setTodos(filteredTodos);
    setDoneTodos([...doneTodos, todo]);
  };

  const undoTodo = (todo: string) => {
    const filteredDoneTodo = doneTodos.filter(currentTodo => currentTodo !== todo);
    setTodos([...todos, todo]);
    setDoneTodos(filteredDoneTodo);
  };

  const todoListTemplate = () => (
    <InoList>
      {todos.map(todo => (
          <InoListItem key={todo} inoText={todo}>
            <InoCheckbox slot="ino-leading" onCheckedChange={() => doTodo(todo)}/>
          </InoListItem>
        )
      )}
    </InoList>
  );

  const doneListTemplate = () => (
    <InoList>
      {doneTodos.map(todo => (
          <InoListItem key={todo} inoText={todo}>
            <InoCheckbox slot="ino-leading" checked onCheckedChange={() => undoTodo(todo)}/>
          </InoListItem>
        )
      )}
    </InoList>
  );

  const listTemplate = () => {
    return (
      <>
        <InoList>
          {todoListTemplate()}
          <InoListDivider inoBetweenLists/>
          {doneListTemplate()}
        </InoList>
      </>
    );
  };

  return (
    <div className="App">
      <h2>inovex elements Todo-List</h2>
      <InoInput
        type="text"
        value={newTodoName}
        onValueChange={value => onValueChanged(value)}
        placeholder="What needs to be done..."
        inoIconTrailing
        onKeyPress={e => e.key === 'Enter' && addTodo()}
      >
        <InoIcon
          inoIcon={'add'}
          slot={'ino-icon-trailing'}
          inoClickable
          onClick={() => addTodo()}
        />
      </InoInput>
      {listTemplate()}
    </div>
  );
};

export default App;
