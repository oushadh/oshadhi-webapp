import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Divider,
} from '@mui/material';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login here
    console.log('Login submitted:', formData);
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: 'text.secondary',
          }}
        >
          Sign in to access your health dashboard
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: '100%',
            border: '1px solid',
            borderColor: 'grey.100',
            borderRadius: 2,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                  }
                }}
              />
              <Link
                component={RouterLink}
                to="/forgot-password"
                variant="body2"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 3 }}
            >
              Sign In
            </Button>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                New to Oshadhi?
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                Create an account to start monitoring your health
              </Typography>
              <Button
                component={RouterLink}
                to="/create-account"
                variant="outlined"
                fullWidth
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 