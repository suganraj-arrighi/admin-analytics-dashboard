import React, { createContext, useContext, useState, useMemo } from 'react';
import { USERS_LIST } from '../data/mockData';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserContextType {
  users: User[];
  deleteUser: (id: number) => void;
  updateUser: (updatedUser: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(USERS_LIST);

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const value = useMemo(() => ({ users, deleteUser, updateUser }), [users]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUsers must be used within UserProvider');
  return context;
};