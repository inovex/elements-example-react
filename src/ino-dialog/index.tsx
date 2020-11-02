import React from 'react';
import ReactDOM from 'react-dom';
import './Dialog.scss';

import {
  InoSelect,
  InoOption,
  InoDialog,
  InoButton,
  InoIconButton,
} from '../shared/InovexElements';

export const Dialog: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  return (
    <div className="App">
      <InoButton onClick={() => setDialogOpen(!dialogOpen)}>
        Open Dialog
      </InoButton>

      <InoDialog inoOpen={dialogOpen}>
        <div className="ino-dialog-header" slot="header">
          <div className="ino-dialog-title">
            <h3>Dialog</h3>
            <InoIconButton
              onClick={() => setDialogOpen(false)}
              inoIcon="close"
            ></InoIconButton>
          </div>
        </div>
        <div className="ino-dialog-content">
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
          </InoSelect>{' '}
        </div>
        <div className="ino-dialog-footer" slot="footer">
          {' '}
          <InoButton onClick={() => setDialogOpen(!dialogOpen)}>
            Close Dialog
          </InoButton>
        </div>
      </InoDialog>
    </div>
  );
};
ReactDOM.render(<Dialog />, document.getElementById('root'));