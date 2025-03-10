import { createContext, useMemo, ReactNode } from 'react';
import { User } from '../api/user-api';

export interface SessionProviderProps {
  children: ReactNode;
  currentUser: User | null | undefined;
  refetch: () => void;
}

export interface SessionValue {
  currentUser: User | null | undefined;
  refetch: () => void;
}

export const SessionContext = createContext<SessionValue>({} as SessionValue);

export const SessionProvider = ({ children, currentUser, refetch }: SessionProviderProps) => {
  const session = useMemo(() => {
    return { currentUser, refetch };
  }, [currentUser, refetch]);

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
};
