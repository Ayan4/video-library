import { createContext, useContext, useState } from "react";
import { useMutation } from "react-query";
import { userSignup, userLogin } from "../Api/videosApi";
import { apiClient } from "../Api/videosApi";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  if (user) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  }

  apiClient.interceptors.response.use(undefined, error => {
    if (
      error.response?.status === 401 ||
      error.response?.data.message === "Unauthorized Access"
    ) {
      logout();
    }
    return Promise.reject(error);
  });

  // useEffect(() => {
  //   console.log("auth useEffect ran");
  // }, [user]);

  const {
    isLoading: signupLoading,
    isSuccess: isSignupSuccess,
    error: signupError,
    isError: isSignupError,
    mutate: signupMutate,
    data: signupData
  } = useMutation(userSignup);

  const {
    isLoading: isLoginLoading,
    isSuccess: isLoginSuccess,
    error: loginError,
    isError: isLoginError,
    mutate: loginMutate,
    data: loginData
  } = useMutation(userLogin, {
    onSuccess: loginData => {
      setUser(loginData.user);
      localStorage?.setItem("user", JSON.stringify(loginData.user));
      navigate("/");
    }
  });

  const logout = () => {
    localStorage?.removeItem("user");
    setUser(null);
    delete apiClient.defaults.headers.common["Authorization"];
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loginMutate,
        isLoginLoading,
        isLoginSuccess,
        isLoginError,
        loginError,
        loginData,
        signupLoading,
        isSignupSuccess,
        signupError,
        isSignupError,
        signupMutate,
        signupData,
        user,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
