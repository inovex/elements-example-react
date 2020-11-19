import React from 'react';
import ReactDOM from 'react-dom';

import { InoButton, InoCard, InoInput } from '../shared/InovexElements';
import { Components } from '@inovex.de/elements/dist/types/components';

export const Card: React.FC<Partial<Components.InoCard>> = ({
  inoSelected = false,
  inoDisableElevation = false,
}) => {
  const [value, setValue] = React.useState('');

  return (
    <InoCard
      style={{ width: '300px', margin: 'auto', marginTop: '5rem' }}
      inoSelected={inoSelected}
      inoDisableElevation={inoDisableElevation}
    >
      <div slot="header">This is a header</div>

      <div slot="content">
        We should add an apple image here.
        <InoInput
          type="text"
          value={value}
          onValueChange={(value) => setValue(value.detail)}
          placeholder="Submit your value..."
          inoIconTrailing
        ></InoInput>
      </div>
      <div slot="footer">
        <InoButton slot="action-buttons" ino-fill="transparent">
          Accept
        </InoButton>
        <InoButton slot="action-buttons">Dismiss</InoButton>
      </div>
    </InoCard>
  );
};

ReactDOM.render(<Card />, document.getElementById('root'));
