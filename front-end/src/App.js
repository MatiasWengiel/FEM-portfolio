import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: "#5FB4A2",
        main: '#203A4C',
        dark: '#33323D'
        // contrastText: will be calculated to contrast with palette.primary.main
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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
