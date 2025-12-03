import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check if a user is already logged in upon app load
    useEffect(() => {
        const loggedInUser = localStorage.getItem('sessionUser');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    // Register: Save user data to "Database" (localStorage)
    const register = (userData) => {
        // In a real app, this goes to an API. Here we store in localStorage.
        localStorage.setItem('dbUser', JSON.stringify(userData));
        return true;
    };

    // Login: Check credentials against "Database"
    const login = (email, password) => {
        const dbUserString = localStorage.getItem('dbUser');

        if (!dbUserString) return { success: false, message: "User not found" };

        const dbUser = JSON.parse(dbUserString);

        if (dbUser.email === email && dbUser.password === password) {
            //Session is created
            localStorage.setItem('sessionUser', JSON.stringify(dbUser));
            setUser(dbUser);
            return { success: true };
        }
        return { success: false, message: "Invalid credentials" };
    };


    const logout = () => {
        localStorage.removeItem('sessionUser');
        setUser(null);
    };


    const updateUser = (updatedData) => {
        const newData = { ...user, ...updatedData };
        localStorage.setItem('dbUser', JSON.stringify(newData)); // Update DB
        localStorage.setItem('sessionUser', JSON.stringify(newData)); // Update Session
        setUser(newData);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};