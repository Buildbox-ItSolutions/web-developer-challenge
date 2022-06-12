import React from 'react';
import ReactDOM from 'react-dom/client';

/* Routes */
import Router from 'services/router';

/* Styles */
import Global from 'styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>
      <Global />
      <Router />
    </div>
  </React.StrictMode>
);
