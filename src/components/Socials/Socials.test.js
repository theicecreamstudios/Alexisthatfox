import React from 'react';
import ReactDOM from 'react-dom';
import Socials from './Socials';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Socials />, div);
  ReactDOM.unmountComponentAtNode(div);
});