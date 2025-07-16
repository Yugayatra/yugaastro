'use client';

import { useState, useEffect, useRef } from 'react';
import { initializeRecaptcha, sendOTP, verifyOTP } from '../lib/firebase';
import { ConfirmationResult } from 'firebase/auth';
import { getUserOrCreate } from '../lib/users';
import Toast from './Toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (phoneNumber: string) => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);

  // Initialize reCAPTCHA when modal opens
  useEffect(() => {
    if (isOpen && recaptchaContainerRef.current) {
      try {
        initializeRecaptcha('recaptcha-container');
      } catch (error) {
        console.error('Error initializing reCAPTCHA:', error);
      }
    }
  }, [isOpen]);

  const handleSendOtp = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Format phone number with country code if not provided
      const formattedPhone = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;
      
      // Send OTP using Firebase
      const result = await sendOTP(formattedPhone);
      setConfirmationResult(result);
      
      setShowOtpInput(true);
      setError('');
      setToast({
        message: 'OTP sent successfully!',
        type: 'success',
        isVisible: true
      });
    } catch (error: unknown) {
      console.error('Error sending OTP:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send OTP. Please try again.';
      setError(errorMessage);
      setToast({
        message: errorMessage,
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    if (!confirmationResult) {
      setError('No OTP confirmation found. Please send OTP again.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Verify OTP using Firebase
      const result = await verifyOTP(confirmationResult, otp);
      
      // Get or create user in Firestore
      const userData = await getUserOrCreate(
        result.user.uid,
        result.user.phoneNumber || phoneNumber
      );
      
      setToast({
        message: userData.createdAt === userData.updatedAt 
          ? 'Welcome to YugaAstro! Your account has been created.'
          : 'Welcome back to YugaAstro!',
        type: 'success',
        isVisible: true
      });
      
      // Call the success callback with user data
      onLoginSuccess(userData.phoneNumber);
      handleClose();
    } catch (error: unknown) {
      console.error('Error verifying OTP:', error);
      const errorMessage = error instanceof Error ? error.message : 'Invalid OTP. Please try again.';
      setError(errorMessage);
      setToast({
        message: errorMessage,
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setPhoneNumber('');
    setOtp('');
    setShowOtpInput(false);
    setError('');
    setIsLoading(false);
    setConfirmationResult(null);
    setToast({ message: '', type: 'success', isVisible: false });
    onClose();
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full">
          {/* reCAPTCHA container */}
          <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!showOtpInput ? (
          <div>
            <p className="text-gray-600 mb-4">
              Enter your phone number to receive an OTP for verification
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                maxLength={10}
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <button
              onClick={handleSendOtp}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              Enter the 6-digit OTP sent to {phoneNumber}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit OTP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent text-center text-lg tracking-widest"
                maxLength={6}
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <div className="space-y-3">
              <button
                onClick={handleVerifyOtp}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button
                onClick={() => setShowOtpInput(false)}
                className="w-full text-spiritual-gold hover:text-spiritual-dark-gold font-medium transition-colors duration-200"
              >
                Change Phone Number
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
      
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </>
  );
};

export default LoginModal; 