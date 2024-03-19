import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const tokenFromLocalStorage = localStorage.getItem('token');
        setToken(tokenFromLocalStorage);
    }, []);

    const storeTokenInLS = (serverToken) => {
   try {
       localStorage.setItem("token", serverToken);
       return true; // Return true if setting the token was successful
   } catch (error) {
       return false; // Return false if there was an error setting the token
   }
};


    let isLoggedIn = !!token;
    console.log("isLogged ", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
       return localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider ");
    }
    return authContextValue;
};
