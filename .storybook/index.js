import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../src/components/Search'

storiesOf('Search', module)
    .add('test', () => (
      <Search onClick={action('clicked')} />
    ))