import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Plans from './components/plans/Plans';
import About from './components/about/About';
import Subscribe from './components/auth/Subscribe';
import ForgotPassword from './components/auth/ForgotPassword';
import Contact from './components/contact/Contact';
import CreateAccount from './components/auth/CreateAccount';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

interface AppProps {
  RouterComponent?: typeof Router;
}

const App: React.FC<AppProps> = ({ RouterComponent = Router }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterComponent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </RouterComponent>
    </ThemeProvider>
  );
};

export default App;
