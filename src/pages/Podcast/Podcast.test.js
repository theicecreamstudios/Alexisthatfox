import React from 'react';
import ReactDOM from 'react-dom';
import Podcast from './Podcast';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Podcast />, div);
  ReactDOM.unmountComponentAtNode(div);
});