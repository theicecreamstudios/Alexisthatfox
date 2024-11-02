import React from 'react';
import ReactDOM from 'react-dom';
import Retreats from './Retreats';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Retreats />, div);
  ReactDOM.unmountComponentAtNode(div);
});