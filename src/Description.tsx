import * as MagicMove from 'react-native-magic-move';
import React from 'react';

export const Description = () => (
  <MagicMove.Scene>
    <MagicMove.View
      id="logo"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderRadius: 50,
      }}
    />
  </MagicMove.Scene>
);
