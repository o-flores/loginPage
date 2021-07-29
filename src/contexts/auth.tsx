/* eslint-disable no-use-before-define */
import React,
{
  createContext, useContext, ReactNode, useState,
} from 'react';

type User = {
  id: String,
  email: String,
}

type AuthContextProviderProps = {
  children: ReactNode;
}

type AuthContextType = {
  user: User | undefined,
  setUser: Function,
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as User);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
