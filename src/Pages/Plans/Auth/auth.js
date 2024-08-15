import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const login = async (email, password) => {
    try {
      // Perform GET request with email and password in URL path
      const response = await axios.get(
        `http://localhost:8080/register/get/${encodeURIComponent(email)}/${encodeURIComponent(password)}`
      );

      if (response.status === 200) {
        // Store email and password in state
        setUser({
          email,
          password, // Note: Storing password in state is generally not recommended for security reasons.
        });
        navigate("/plans");
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    // Optionally, clear any stored data or tokens
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
