import React from 'react';
import ReactDOM from 'react-dom';
import { make as App } from './App.bs';
import './tailwind.output.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
