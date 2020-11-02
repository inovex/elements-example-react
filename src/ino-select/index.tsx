import React from 'react';
import ReactDOM from 'react-dom';

import { InoSelect, InoOption } from '../shared/InovexElements';

export const Select: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  return (
    <div className="App">
      <InoSelect
        onValueChange={(event) => setSelectedValue(event.detail)}
        inoLabel="Form select"
        required
        value={selectedValue}
      >
        <InoOption value="Douglas, Gaylord and Gutmann">
          Douglas, Gaylord and Gutmann
        </InoOption>
        <InoOption value="Reinger, Russel and Dooley">
          Reinger, Russel and Dooley
        </InoOption>
        <InoOption value="Borer, Barton and Homenick">
          Borer, Barton and Homenick
        </InoOption>
        <InoOption value="Gutmann LLC">Gutmann LLC</InoOption>
      </InoSelect>
    </div>
  );
};
ReactDOM.render(<Select />, document.getElementById('root'));
