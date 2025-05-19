import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ 
    name?: string; 
    email?: string; 
    password?: string;
    confirmPassword?: string;
  }>({});
  
  const { signup, isLoading, error } = useAuth();
  const navigate = useNavigate();

  // Password strength criteria
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordStrength = [hasMinLength, hasUpperCase, hasLowerCase, hasNumber]
    .filter(Boolean).length;

  const validateForm = () => {
    const newErrors: { 
      name?: string; 
      email?: string; 
      password?: string;
      confirmPassword?: string;
    } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await signup(name, email, password);
        navigate('/');
      } catch (err) {
        // Error handling is done in the AuthContext
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-card max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-gray-600 mt-2">Join thousands of students finding their perfect accommodation</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            id="name"
            className={`input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={`input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`input pr-10 ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}

          {/* Password strength indicator */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="flex mb-1">
                <div className="h-1 flex-1 rounded-l-full bg-gray-200 overflow-hidden">
                  <div 
                    className={`h-full ${
                      passwordStrength === 0 ? 'bg-gray-200' :
                      passwordStrength === 1 ? 'bg-red-500' :
                      passwordStrength === 2 ? 'bg-orange-500' :
                      passwordStrength === 3 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${passwordStrength * 25}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Password strength: {
                  passwordStrength === 0 ? 'None' :
                  passwordStrength === 1 ? 'Weak' :
                  passwordStrength === 2 ? 'Fair' :
                  passwordStrength === 3 ? 'Good' :
                  'Strong'
                }
              </div>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center text-sm">
                  {hasMinLength ? 
                    <CheckCircle2 size={14} className="text-green-500 mr-1" /> : 
                    <AlertCircle size={14} className="text-gray-400 mr-1" />
                  }
                  <span className={hasMinLength ? 'text-green-600' : 'text-gray-500'}>
                    At least 8 characters
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  {hasUpperCase ? 
                    <CheckCircle2 size={14} className="text-green-500 mr-1" /> : 
                    <AlertCircle size={14} className="text-gray-400 mr-1" />
                  }
                  <span className={hasUpperCase ? 'text-green-600' : 'text-gray-500'}>
                    At least one uppercase letter
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  {hasLowerCase ? 
                    <CheckCircle2 size={14} className="text-green-500 mr-1" /> : 
                    <AlertCircle size={14} className="text-gray-400 mr-1" />
                  }
                  <span className={hasLowerCase ? 'text-green-600' : 'text-gray-500'}>
                    At least one lowercase letter
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  {hasNumber ? 
                    <CheckCircle2 size={14} className="text-green-500 mr-1" /> : 
                    <AlertCircle size={14} className="text-gray-400 mr-1" />
                  }
                  <span className={hasNumber ? 'text-green-600' : 'text-gray-500'}>
                    At least one number
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className={`input pr-10 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : ''}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span className="ml-2">Creating account...</span>
            </div>
          ) : (
            'Create account'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;