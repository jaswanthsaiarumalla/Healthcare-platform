import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './Login.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      if (email === 'admin@healthcare.com' && password === 'password') {
        setUser({ 
          uid: '123', 
          email: 'admin@healthcare.com',
          displayName: 'Dr. Admin',
          photoURL: ''
        } as any);
        navigate('/');
      } else {
        setError('Invalid email or password. Use admin@healthcare.com / password');
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-bg-shape shape-1"></div>
      <div className="login-bg-shape shape-2"></div>
      
      <Card glass className="login-card">
        <div className="login-header">
          <div className="login-logo">H</div>
          <h2>Welcome to HealthSync</h2>
          <p>Please sign in to your accounts.</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="admin@healthcare.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          
          {error && <div className="login-error">{error}</div>}
          
          <Button 
            type="submit" 
            fullWidth 
            disabled={isSubmitting}
            className="login-btn"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
          
          <div className="login-hint">
            Hint: admin@healthcare.com / password
          </div>
        </form>
      </Card>
    </div>
  );
};
