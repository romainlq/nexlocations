import React from 'react';
import { storiesOf } from '@storybook/react';

import PinInfo from './PinInfo';

const info = {
  clientName: 'Carrefour',
  consultants: [
    {
      name: 'Toto'
    },
    {
      name: 'tutu'
    }
  ]
};

storiesOf('PinInfo', module).add('test', () => <PinInfo info={info} />);
