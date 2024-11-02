import React from 'react';
import ReactDOM from 'react-dom';
import CacaoCircles from './CacaoCircles';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CacaoCircles />, div);
  ReactDOM.unmountComponentAtNode(div);
});