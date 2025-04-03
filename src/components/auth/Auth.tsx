import React, { useState, SyntheticEvent, useEffect } from 'react';
import { useNavigate, Link as RouterLink, useSearchParams } from 'react-router-dom';
import './Auth.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tabValue, setTabValue] = useState(searchParams.get('tab') === 'signup' ? 1 : 0);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    setTabValue(searchParams.get('tab') === 'signup' ? 1 : 0);
  }, [searchParams]);

  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    const newTab = newValue === 1 ? '?tab=signup' : '';
    navigate(`/auth${newTab}`, { replace: true });
    setTabValue(newValue);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    navigate('/dashboard');
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', signupData);
    navigate('/dashboard');
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="auth">
      <div className="background-container">
        <div className="auth-blob"></div>
        <div className="auth-blob"></div>
        <div className="auth-blob"></div>
      </div>
      
      <div className="auth-container">
        <div className="auth-header">
          <h1>Welcome to Oshadhi</h1>
          <p>Your personal health monitoring platform</p>
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <div
              className={`auth-tab ${tabValue === 0 ? 'active' : ''}`}
              onClick={() => handleTabChange({} as SyntheticEvent, 0)}
            >
              Sign In
            </div>
            <div
              className={`auth-tab ${tabValue === 1 ? 'active' : ''}`}
              onClick={() => handleTabChange({} as SyntheticEvent, 1)}
            >
              Create Account
            </div>
          </div>

          <TabPanel value={tabValue} index={0}>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>

              <button type="submit" className="auth-button auth-button-primary">
                Sign In
              </button>

              <div className="auth-footer">
                <RouterLink to="/forgot-password" className="auth-link">
                  Forgot password?
                </RouterLink>
              </div>
            </form>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="signup-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirm-password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="auth-button auth-button-primary">
                Create Account
              </button>

              <div className="auth-footer">
                By creating an account, you agree to our{' '}
                <RouterLink to="/terms" className="auth-link">Terms of Service</RouterLink>
                {' '}and{' '}
                <RouterLink to="/privacy" className="auth-link">Privacy Policy</RouterLink>
              </div>
            </form>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Auth; 