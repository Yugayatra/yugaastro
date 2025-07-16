export interface UserSession {
  phoneNumber: string | null;
  uid: string;
  isAuthenticated: boolean;
  loginTime: string;
}

export const getUserSession = (): UserSession | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const userData = localStorage.getItem('yugaAstroUser');
    if (!userData) return null;
    
    const session = JSON.parse(userData) as UserSession;
    
    // Check if session is still valid (24 hours)
    const loginTime = new Date(session.loginTime);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
    
    if (hoursDiff > 24) {
      // Session expired, remove it
      localStorage.removeItem('yugaAstroUser');
      return null;
    }
    
    return session;
  } catch (error) {
    console.error('Error parsing user session:', error);
    localStorage.removeItem('yugaAstroUser');
    return null;
  }
};

export const isUserAuthenticated = (): boolean => {
  const session = getUserSession();
  return session?.isAuthenticated || false;
};

export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('yugaAstroUser');
  }
};

export const getPhoneNumber = (): string | null => {
  const session = getUserSession();
  return session?.phoneNumber || null;
}; 