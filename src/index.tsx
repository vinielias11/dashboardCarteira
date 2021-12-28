import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TemaProvider } from './hooks/theme'

ReactDOM.render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);