import React from 'react';
import { storiesOf } from '@storybook/react';

import PinInfo from '.';

const cityTest = {
  city: "Test",
  state: "IDF"
}

storiesOf('PinInfo', module)
      .add('test', () => (
        <PinInfo info={cityTest}/>
      ));