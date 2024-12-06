import React from 'react';
import ReactDOM from 'react-dom';
import SocialClub from './SocialClub';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialClub />, div);
  ReactDOM.unmountComponentAtNode(div);
});