"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirebaseAuth } from "../firebase/client";
import { getUserProfile, logoutUser } from "../firebase/auth";
import type { UserProfileDocument } from "../types/core";
import { SystemRole, BusinessVertical, PermissionCode, ROLE_PERMISSIONS } from "@sryn/auth";

export interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfileDocument | null;
  loading: boolean;
  isAuthenticated: boolean;
  role: SystemRole;
  businessVertical: BusinessVertical | null;
  permissions: PermissionCode[];
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userProfile: null,
  loading: true,
  isAuthenticated: false,
  role: SystemRole.CUSTOMER,
  businessVertical: null,
  permissions: [],
  logout: async () => {},
  refreshProfile: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileDocument | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = async (uid: string) => {
    try {
      const profile = await getUserProfile(uid);
      setUserProfile(profile);
    } catch (err) {
      console.error("Failed to load user profile:", err);
      setUserProfile(null);
    }
  };

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (userProfile) {
      await logoutUser(userProfile);
    } else {
      await logoutUser();
    }
    setCurrentUser(null);
    setUserProfile(null);
  };

  const handleRefreshProfile = async () => {
    if (currentUser) {
      await fetchProfile(currentUser.uid);
    }
  };

  const role = userProfile?.role || SystemRole.CUSTOMER;
  const businessVertical = userProfile?.businessVertical || null;
  const permissions = ROLE_PERMISSIONS[role] || [];
  const isAuthenticated = !!currentUser && userProfile?.status === "ACTIVE";

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        isAuthenticated,
        role,
        businessVertical,
        permissions,
        logout: handleLogout,
        refreshProfile: handleRefreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
