import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router } from '@reach/router';
import FavPage from './FavPage';
import HomePage from './HomePage';
import { StoreProvider } from './Store';
import './index.css';

render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <HomePage path='/' />
        <FavPage path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
