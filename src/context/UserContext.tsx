import React, { createContext, useContext, useState } from 'react';
import { USERS_LIST } from '../data/mockData';

interface UserContextType {
  users: any[];
  displayName: string;
  setDisplayName: (name: string) => void;
  deleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState(USERS_LIST);
  const [displayName, setDisplayName] = useState('Admin User');

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, displayName, setDisplayName, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUsers must be used within UserProvider');
  return context;
};