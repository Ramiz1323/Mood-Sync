import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { register, login, getMe, logout } from "../services/auth.api";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const response = await register({ username, email, password });
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async ({ username, password }) => {
    setLoading(true);
    try {
      const response = await login({ username, password });
      setUser(response.user);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleGetMe = async () => {
    setLoading(true);
    try {
      const response = await getMe();
      setUser(response.user);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      throw err;
    } finally {
      setUser(null);
      setLoading(false);
    }
  };
  
  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout
  }
};
