'use client';

import { useState, useEffect } from 'react';
import { UserData } from '../lib/users';

export const useAuth = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on mount
    const storedUser = localStorage.getItem('yugaAstroUser');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('yugaAstroUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem('yugaAstroUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('yugaAstroUser');
  };

  const updateUserData = (updates: Partial<UserData>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('yugaAstroUser', JSON.stringify(updatedUser));
    }
  };

  const isAuthenticated = user?.isAuthenticated || false;

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUserData
  };
}; 