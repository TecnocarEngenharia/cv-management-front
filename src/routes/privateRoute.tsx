import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }: any) => {
  const token = localStorage.getItem("token");
  const isAuthenticatedInitially = token ? true : false;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuthenticatedInitially);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      const isAuthenticated = token ? true : false;
      setIsAuthenticated(isAuthenticated);
    };

    window.addEventListener("storage", checkToken);
    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []); 

  const userRole = isAuthenticated ? JSON.parse(atob(token!.split(".")[1])).userRole : null;

  const hasAllowedRole = allowedRoles ? allowedRoles.includes(userRole) : false;

  if (!token) {
    return <Navigate to="/" />;
  }

  if (isAuthenticated && (hasAllowedRole || userRole === "admin")) {
    return <>{children}</>;
  } else {
    alert('Você não tem acesso a essa página');
    return <Navigate to="/register" />;
  }
};

export { PrivateRoute };
