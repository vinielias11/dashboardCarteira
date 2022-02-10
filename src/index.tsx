import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TemaProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';

ReactDOM.render(
  <React.StrictMode>
    <TemaProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TemaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);