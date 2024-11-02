import React from 'react';
import ReactDOM from 'react-dom';
import Brands from './Brands';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brands />, div);
  ReactDOM.unmountComponentAtNode(div);
});