import React from 'react';

import { InoFab } from '../shared/InovexElements';

export const Fab: React.FC = () => {
  return (
    <div className="App">
      <InoFab inoIcon="star" inoLabel="This is a fab"></InoFab>
    </div>
  );
};
