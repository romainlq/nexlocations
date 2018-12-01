import React from 'react';
import { storiesOf } from '@storybook/react';

import ConsultantCard from './ConsultantCard';

const consultant = {
  firstname: 'John',
  lastname: 'Doe',
  mail: 'john.doe@mail.com',
  missions: [
    {
      id: 1,
      clientName: 'Carrefour',
      startDate: '12-05-2018',
      endDate: '12-05-2018'
    }
  ]
};
const consultantNoMission = {
  firstname: 'Jane',
  lastname: 'Fonda',
  mail: 'jane.fonda@mail.com',
  missions: []
};

storiesOf('ConsultantCard', module)
  .add('avec mission', () => <ConsultantCard consultant={consultant} />)
  .add('sans mission', () => (
    <ConsultantCard consultant={consultantNoMission} />
  ));
