import React, { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
import { api } from "../services/api";
import { TUser } from "../interfaces/user";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

interface AuthContextData {
  isAuthenticated: boolean;
  Login: (username: string, password: string) => Promise<void>;
  Register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  Logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const jwt = localStorage.getItem("nextauth-token");

    if (jwt) {
      //valid token expiration
      const decoded = jwtDecode<{ exp: number }>(jwt);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        localStorage.removeItem("nextauth-token");
        localStorage.removeItem("nextauth-credentials");
        setIsAuthenticated(false);
        router.push("/auth/login");
        toast.warning("Sua sessão expirou! Faça login novamente.");
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const Login = async (username: string, password: string) => {
    const response = await api.post("/api/auth/signin", {
      username,
      password,
    });

    if (response.status !== 200 || response.data.role !== "ROLE_USER") {
      throw new Error("Login ou usuário inválido!");
    } else {
      const { accessToken: jwt, user } = response.data;
      const userData = JSON.stringify(user as TUser);

      await localStorage.setItem("nextauth-token", jwt);
      await localStorage.setItem("nextauth-credentials", userData);

      setIsAuthenticated(true);
      router.replace("/");
    }
  };

  const Register = async (name: string, email: string, password: string) => {
    const response = await api.post("/config/user/register", {
      name,
      email,
      password,
    });

    if (response.status !== 201) {
      throw new Error("Falha ao cadastrar o usuário");
    } else {
      router.replace("/auth/login");
      toast.success("Cadastro realizado com sucesso!");
    }
  };

  const Logout = async () => {
    await localStorage.removeItem("nextauth-token");
    await localStorage.removeItem("nextauth-credentials");
    setIsAuthenticated(false);
    router.push("/");
    toast.warn('Você desconectou do sistema! Até a próxima!');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, Login, Register, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
