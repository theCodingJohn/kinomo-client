import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocalStorageData = () => {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);

        setLoggedUser(user);
      }

      setIsLoading(false);
    };

    getLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, isLoading, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
};
