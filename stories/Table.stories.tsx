import { storiesOf } from '@storybook/react';
import Table from '../src/Table';
import { withActions } from '@storybook/addon-actions';

const data: Row[] = [
  {
    name: 'Alice',
    age: 25,
    gender: 'Female',
    description: 'Alice is a software engineer.'
  },
  {
    name: 'Bob',
    age: 30,
    gender: 'Male',
    description: 'Bob is a data scientist.'
  },
  {
    name: 'Eve',
    age: 28,
    gender: 'Female',
    description: 'Eve is a product manager.'
  },
  // ...
];

storiesOf('Table', module)
.addDecorator(withActions('click .toggle-button'))
  .add('default', () => (
    <Table data={data} />
  ));
