import React from 'react';
import ReactDOM from 'react-dom';

import { InoFab } from '../shared/InovexElements';

export const Fab: React.FC = () => {
  return (
    <div className="App">
      <InoFab inoIcon="star" inoLabel="This is a fab"></InoFab>
    </div>
  );
};

ReactDOM.render(<Fab />, document.getElementById('root'));
