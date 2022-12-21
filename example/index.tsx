import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import {Button} from '../.';
import {Table} from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Button text='hi'/>
      <Table/>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
