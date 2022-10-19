import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Index from './routes/Index';
import Projects from './routes/Projects'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])

const theme = createTheme({
  palette: {
    primary: {
      light: "#5FB4A2",
      main: '#203A4C',
      dark: '#33323D'
    },
    secondary: {
      light: '#FAFAFA',
      main: '#EAEAEB',
    },
    error: {
      main: '#F43030'
    }
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
