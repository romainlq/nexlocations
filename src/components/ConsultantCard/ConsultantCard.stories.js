import React from 'react';
import { storiesOf } from '@storybook/react';

import ConsultantCard from '.';

storiesOf('ConsultantCard', module)
    .add('test', () => (
      <ConsultantCard />
    ));