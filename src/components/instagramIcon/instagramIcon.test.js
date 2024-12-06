import React from 'react';
import ReactDOM from 'react-dom';
import InstagramIcon from './InstagramIcon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstagramIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});