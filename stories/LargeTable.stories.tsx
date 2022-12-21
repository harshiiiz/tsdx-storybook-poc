import React from 'react';
import { storiesOf } from '@storybook/react';
import LargeTable from '../src/LargeTable';

const data = [
  { id: 1, name: 'Alice', department: 'HR' },
  { id: 2, name: 'Bob', department: 'Marketing' },
  { id: 3, name: 'Charlie', department: 'IT' },
];

storiesOf('LargeTable', module)
  .add('default', () => <LargeTable data={data} />);
