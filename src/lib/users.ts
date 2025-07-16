import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface UserData {
  uid: string;
  phoneNumber: string;
  name?: string;
  email?: string;
  isAuthenticated: boolean;
  loginTime: string;
  lastLoginTime: string;
  createdAt: string;
  updatedAt: string;
  preferences?: {
    language?: string;
    notifications?: boolean;
  };
  profile?: {
    birthDate?: string;
    birthTime?: string;
    birthPlace?: string;
    gender?: string;
  };
}

export const createUser = async (userData: UserData): Promise<void> => {
  try {
    const userRef = doc(db, 'users', userData.uid);
    await setDoc(userRef, {
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log('User created successfully:', userData.uid);
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export const getUser = async (uid: string): Promise<UserData | null> => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data() as UserData;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
};

export const updateUser = async (uid: string, updates: Partial<UserData>): Promise<void> => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    console.log('User updated successfully:', uid);
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
};

export const updateLastLogin = async (uid: string): Promise<void> => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      lastLoginTime: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating last login:', error);
    // Don't throw error for this as it's not critical
  }
};

export const getUserOrCreate = async (uid: string, phoneNumber: string): Promise<UserData> => {
  try {
    // Try to get existing user
    const existingUser = await getUser(uid);
    
    if (existingUser) {
      // Update last login time
      await updateLastLogin(uid);
      
      // Update local data
      const updatedUser = {
        ...existingUser,
        lastLoginTime: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Update localStorage
      localStorage.setItem('yugaAstroUser', JSON.stringify(updatedUser));
      
      return updatedUser;
    } else {
      // Create new user
      const newUser: UserData = {
        uid,
        phoneNumber,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
        lastLoginTime: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        preferences: {
          language: 'English',
          notifications: true
        }
      };
      
      await createUser(newUser);
      
      // Store in localStorage
      localStorage.setItem('yugaAstroUser', JSON.stringify(newUser));
      
      return newUser;
    }
  } catch (error) {
    console.error('Error in getUserOrCreate:', error);
    throw new Error('Failed to get or create user');
  }
}; 