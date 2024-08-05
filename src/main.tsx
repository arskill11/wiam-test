import React from 'react';
import ReactDOM from 'react-dom/client';

import { createGlobalStyle } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
