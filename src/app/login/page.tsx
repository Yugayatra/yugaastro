'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LoginModal from '../../components/LoginModal';

const LoginPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, redirect to dashboard
        router.push('/dashboard');
      } else {
        // User is not logged in, show login modal
        setIsLoginModalOpen(true);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLoginSuccess = (phoneNumber: string) => {
    // Redirect to dashboard after successful login
    router.push('/dashboard');
  };

  const handleCloseModal = () => {
    // If user closes login modal without logging in, redirect to home
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-spiritual-purple via-spiritual-dark-purple to-spiritual-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-spiritual-gold mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple via-spiritual-dark-purple to-spiritual-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome Back</h1>
          <p className="text-white/60 text-lg">
            Sign in to access your personalized dashboard
          </p>
        </div>
        
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
        >
          Sign In
        </button>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default LoginPage; 