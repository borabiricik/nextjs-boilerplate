'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type Props = { token?: string } & PropsWithChildren;

export const AuthContext = React.createContext<{ authenticated: boolean }>({
  authenticated: false,
});

const AuthProvider = ({ children, token }: Props) => {
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    setauthenticated(!!token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
