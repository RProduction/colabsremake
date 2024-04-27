import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Yellow from '@mui/material/colors/yellow';

declare module '@mui/material/styles' {
  interface Palette {
    menu: Palette['primary'];
    cardFab: Palette['primary'];
  }

  interface PaletteOptions {
    menu?: PaletteOptions['primary'];
    cardFab?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    menu: true
  }
}

declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    cardFab: true
  }
}

const theme = createTheme({
  palette: {
    menu: {
      main: Yellow[400]
    },
    cardFab: {
      main: "#000000"
    }
  }
})

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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
