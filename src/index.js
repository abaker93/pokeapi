import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Pokedex from './routes/Pokedex';
import Pokemon from './routes/Pokemon';
import Error from './routes/Error';

import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'pokedex/:dex',
        element: <Pokedex />
      },
      {
        path: 'pokemon/:pokeId',
        element: <Pokemon />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);