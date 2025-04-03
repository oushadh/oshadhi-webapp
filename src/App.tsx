import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Plans from './components/plans/Plans';
import About from './components/about/About';
import Auth from './components/auth/Auth';
import ForgotPassword from './components/auth/ForgotPassword';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import { theme } from './theme/theme';

interface AppProps {
  RouterComponent?: typeof Router;
}

const App: React.FC<AppProps> = ({ RouterComponent = Router }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterComponent>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouterComponent>
    </ThemeProvider>
  );
};

export default App;
