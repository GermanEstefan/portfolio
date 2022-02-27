import React from 'react';
import { render } from 'react-dom';
import { Portfolio } from './Portfolio';
import './assets/styles/styles.css'

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  root
);
