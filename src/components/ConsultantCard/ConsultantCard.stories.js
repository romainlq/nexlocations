import React from 'react';
import { storiesOf } from '@storybook/react';

import ConsultantCard from './ConsultantCard';

storiesOf('ConsultantCard', module)
    .add('test', () => (
      <ConsultantCard />
    ));