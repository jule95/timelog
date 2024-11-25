import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import AppState from './state/AppState.tsx';
import './i18n.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import MyTimeLog from './pages/MyTimeLog/MyTimeLog.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import config from './config.ts';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/config.ts';
import Projects from './pages/Projects/Projects.tsx';
import Employees from './pages/Employees/Employees.tsx';

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    children: [{
      element: <Home />,
      path: config.routes.home,
    }, {
      element: <MyTimeLog />,
      path: config.routes.myTimeLog,
    }, {
      element: <Projects />,
      path: config.routes.projects,
    }, {
      element: <Employees />,
      path: config.routes.employees,
    }],
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <AppState>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.StrictMode>
  </AppState>
);
