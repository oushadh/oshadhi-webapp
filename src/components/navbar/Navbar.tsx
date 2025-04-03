import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  Box,
  Typography,
  Container,
} from '@mui/material';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTime = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const navbar = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update blob animation speed
      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current < 150) {
        // User is actively scrolling - speed up blobs
        navbar.current?.style.setProperty('--blob-speed', '3');
      }
      lastScrollTime.current = currentTime;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set new timeout to reset speed
      scrollTimeout.current = setTimeout(() => {
        navbar.current?.style.setProperty('--blob-speed', '1');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Plans', path: '/plans' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navbar}>
      <Container maxWidth="xl">
        <Box className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M2 12h20" />
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12M6 12h12" />
            </svg>
          </Link>

          {/* Navigation Links */}
          <Box className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <Typography className="nav-link-label">{item.label}</Typography>
              </Link>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box className="auth-buttons">
            <Button
              component={Link}
              to="/auth"
              className="auth-button login"
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/auth?tab=signup"
              variant="contained"
              className="auth-button signup"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar; 