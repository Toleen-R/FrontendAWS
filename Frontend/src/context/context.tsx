import { createContext, useState } from 'react';

// Skapa en Context för autentisering (AuthContext)
export const AuthContext = createContext({});

// AuthProvider-komponenten som tillhandahåller AuthContext till alla barnkomponenter
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // State för att hantera om användaren är inloggad eller inte
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    // AuthContext.Provider gör det möjligt för alla barnkomponenter att använda AuthContext
    <AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
      {children} {/* De komponenter som är barn till AuthProvider kan använda context-värdet */}
    </AuthContext.Provider>
  );
};
