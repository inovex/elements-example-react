import React from 'react';
import ReactDOM from 'react-dom';

import { InoChipSet, InoChip, InoHeader } from '../shared/InovexElements';
import { Components } from '@inovex.de/elements/dist/types/components';

export const ChipSet: React.FC<Components.InoChipSet> = ({ inoType }) => {
  const chipsetSelectionChange = (e: CustomEvent<any>) => {
    console.log(
      e.detail === true
        ? 'The last one was toggled'
        : `User clicked: ${e.detail}`
    );
  };

  return (
    <div className="App">
      <div style={{ margin: '1rem' }}>
        <InoHeader inoTitle="Type 'default'" />
        <InoChipSet>
          <InoChip inoValue="apple" inoLabel="Apple" />
          <InoChip inoValue="banana" inoLabel="Banana" />
          <InoChip inoValue="cherry" inoLabel="Cherry" />
        </InoChipSet>
      </div>
      <div style={{ margin: '1rem' }}>
        <InoHeader inoTitle="Type 'choice'" />
        <InoChipSet inoType="choice" onUpdateChipSet={chipsetSelectionChange}>
          <InoChip inoValue="apple" inoLabel="Apple" />
          <InoChip inoValue="banana" inoLabel="Banana" />
          <InoChip inoValue="cherry" inoLabel="Cherry" />
        </InoChipSet>
      </div>
      <div style={{ margin: '1rem' }}>
        <InoHeader inoTitle="Type 'filter'" />
        <InoChipSet inoType="filter">
          <InoChip inoValue="apple" inoLabel="Apple" />
          <InoChip inoValue="banana" inoLabel="Banana" />
          <InoChip inoValue="cherry" inoLabel="Cherry" />
        </InoChipSet>
      </div>
    </div>
  );
};

ReactDOM.render(<ChipSet />, document.getElementById('root'));
