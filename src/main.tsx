import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import AppState from './state/AppState.tsx';
import './i18n.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Page1 from './pages/page1/Page1.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import config from './config.ts';

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    children: [{
      element: <Home />,
      path: config.routes.home,
    }, {
      element: <Page1 />,
      path: config.routes.page1,
    }],
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <AppState>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppState>
);
