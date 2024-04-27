import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "services",
        element: <Services/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
