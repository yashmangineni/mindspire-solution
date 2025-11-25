import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAdminAuthenticated");
      if (authStatus === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    
    checkAuthStatus();
    
    // Listen for storage changes (in case another tab updates auth status)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "isAdminAuthenticated") {
        checkAuthStatus();
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (isAuthenticated === null) {
    // Still checking authentication status
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Not authenticated, show login form
    return <AdminLogin />;
  }

  // Authenticated, show protected content
  return <>{children}</>;
};

export default ProtectedRoute;