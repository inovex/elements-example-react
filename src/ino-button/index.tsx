import * as React from 'react';
import { InoButton, InoIcon } from '../shared/InovexElements';

export const Button = () => (
  <div className="App">
    <InoButton
      inoColorScheme="primary"
      inoDense={false}
      inoFill="solid"
      inoLoading={false}
      inoIconLeading={true}
      inoIconTrailing={true}
    >
      <InoIcon slot="ino-icon-leading" inoIcon="info"></InoIcon>
      My Button
      <InoIcon slot="ino-icon-trailing" inoIcon="info"></InoIcon>
    </InoButton>
  </div>
);
