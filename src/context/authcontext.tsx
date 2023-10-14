import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface User {
  name:string,
  email:string,
  password:string,
  type:string,
  tel?:string,
  lastname?:string

}

interface Token{
  token:string
}



interface UserContextProps {
  user: User | null;
  token: Token| null;
  loginAuth: (user:User,token:Token) => void;
  registerAuth: (user: User,token:Token) => void;
  logoutAuth: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
 
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser !== null && savedToken !== null) {
      try {
        const parsedUser = JSON.parse(savedUser);
        const parsedToken = JSON.parse(savedToken);
        setUser(parsedUser);
        setToken(parsedToken);
      } catch (error) {
        // Handle the error, e.g., log it or provide a default user
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  const registerAuth = (userData: User,token:Token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', JSON.stringify(token));
  };

  const loginAuth = (userData: User,token:Token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', JSON.stringify(token));
  };


  const logoutAuth = () => {
    setUser(null);
    setToken(null)
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  return <UserContext.Provider value={{token, user, loginAuth, logoutAuth,registerAuth }}>
      {children}
    </UserContext.Provider>
  
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
