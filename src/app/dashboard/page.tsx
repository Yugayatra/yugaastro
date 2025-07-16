'use client';

import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import UserProfile from '../../components/UserProfile';

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-spiritual-gold"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please log in to access your dashboard.</p>
          <Link
            href="/"
            className="px-6 py-3 bg-spiritual-gold text-white rounded-lg hover:bg-spiritual-dark-gold transition-colors duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name || 'User'}!</h1>
          <p className="text-white/90">Manage your account and preferences</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="py-8">
        <UserProfile />
      </div>
    </div>
  );
} 