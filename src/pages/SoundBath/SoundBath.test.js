import React from 'react';
import ReactDOM from 'react-dom';
import SoundBath from './SoundBath';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoundBath />, div);
  ReactDOM.unmountComponentAtNode(div);
});