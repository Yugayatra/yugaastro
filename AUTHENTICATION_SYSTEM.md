# Authentication System Documentation

## Overview

The YUGA ASTRO application implements a secure authentication system using Firebase Authentication with phone number OTP verification. The system includes protected routes, user dashboard, and seamless login/logout functionality.

## Architecture

### Components

1. **Firebase Configuration** (`src/lib/firebase.ts`)
   - Firebase app initialization
   - Authentication setup
   - reCAPTCHA verifier for OTP
   - OTP sending and verification functions

2. **Authentication Hook** (`src/hooks/useAuth.ts`)
   - Custom React hook for authentication state management
   - User data retrieval from localStorage
   - Logout functionality
   - Loading states

3. **Protected Route Component** (`src/components/ProtectedRoute.tsx`)
   - Route protection wrapper
   - Automatic redirect to login for unauthenticated users
   - Loading states during authentication checks

4. **Login Modal** (`src/components/LoginModal.tsx`)
   - Phone number input
   - OTP verification
   - Error handling
   - User session storage

## Routes

### `/login`
- **Purpose**: Authentication entry point
- **Behavior**: 
  - Redirects authenticated users to `/dashboard`
  - Shows login modal for unauthenticated users
  - Redirects to home if login is cancelled

### `/dashboard`
- **Purpose**: Protected user dashboard
- **Protection**: Requires Firebase authentication
- **Features**:
  - User profile information
  - Past consultation history
  - Quick action buttons
  - Logout functionality

## Authentication Flow

### 1. User Login Process
```
User visits /login
    ↓
Check Firebase auth state
    ↓
If authenticated → Redirect to /dashboard
    ↓
If not authenticated → Show login modal
    ↓
User enters phone number
    ↓
Send OTP via Firebase
    ↓
User enters OTP
    ↓
Verify OTP
    ↓
Store user data in localStorage
    ↓
Redirect to /dashboard
```

### 2. Dashboard Access
```
User visits /dashboard
    ↓
ProtectedRoute checks authentication
    ↓
If authenticated → Show dashboard
    ↓
If not authenticated → Redirect to /login
```

### 3. Logout Process
```
User clicks logout
    ↓
Call Firebase signOut()
    ↓
Remove user data from localStorage
    ↓
Redirect to home page
```

## User Data Structure

```typescript
interface UserData {
  phoneNumber: string;      // User's phone number
  uid: string;             // Firebase user ID
  isAuthenticated: boolean; // Authentication status
  loginTime: string;       // ISO timestamp of login
}
```

## Security Features

### 1. Firebase Authentication
- Phone number verification via OTP
- reCAPTCHA integration for bot prevention
- Secure token-based authentication

### 2. Route Protection
- Automatic redirect for unauthenticated users
- Loading states during authentication checks
- Client-side route protection

### 3. Session Management
- User data stored in localStorage
- Automatic session cleanup on logout
- Persistent authentication state

## Dashboard Features

### User Profile Section
- Display phone number
- Show user ID
- Login timestamp
- Active status indicator

### Recent Consultations
- Chat history with astrologers
- Message timestamps
- User vs astrologer message distinction
- Empty state for new users

### Quick Actions
- New consultation booking
- Horoscope viewing
- Astrologer search

## Error Handling

### Login Errors
- Invalid phone number format
- OTP sending failures
- Invalid OTP codes
- Network connectivity issues

### Dashboard Errors
- Authentication state conflicts
- Missing user data
- Logout failures

## Usage Examples

### Using the useAuth Hook
```typescript
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { user, userData, isLoading, logout, isAuthenticated } = useAuth();
  
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please log in</div>;
  
  return (
    <div>
      <p>Welcome, {userData?.phoneNumber}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
```

### Protecting Routes
```typescript
import ProtectedRoute from '../components/ProtectedRoute';

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
};
```

## Configuration

### Firebase Setup
1. Create Firebase project
2. Enable Phone Authentication
3. Configure reCAPTCHA
4. Update `src/lib/firebase.ts` with your config

### Environment Variables
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Best Practices

### 1. Authentication State Management
- Use the `useAuth` hook consistently
- Handle loading states properly
- Implement proper error boundaries

### 2. Security
- Never expose Firebase config keys in client code
- Validate user input on both client and server
- Implement proper session timeout

### 3. User Experience
- Provide clear error messages
- Show loading states during authentication
- Implement smooth transitions between states

## Troubleshooting

### Common Issues

1. **OTP not received**
   - Check phone number format
   - Verify reCAPTCHA configuration
   - Check Firebase console for errors

2. **Authentication state not persisting**
   - Verify localStorage is available
   - Check for browser privacy settings
   - Ensure Firebase auth state is properly initialized

3. **Dashboard not loading**
   - Check authentication state
   - Verify user data in localStorage
   - Check for network connectivity

### Debug Mode
Enable debug logging by adding to `firebase.ts`:
```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('Firebase auth state:', auth.currentUser);
}
```

## Future Enhancements

1. **Server-side authentication**
   - Implement JWT tokens
   - Add session management
   - Database user profiles

2. **Enhanced security**
   - Two-factor authentication
   - Session timeout
   - Device management

3. **User experience**
   - Remember login preference
   - Auto-login functionality
   - Social login options 