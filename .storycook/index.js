import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

import Search from '../src/components/Search'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Search', module)
    .add('test', () => (
      <Map onClick={action('clicked')} />
    ))