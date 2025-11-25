import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when location changes (navigation starts)
    setLoading(true);
    
    // Hide loader after a short delay (simulating page load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] transition-all duration-300">
      {loading && (
        <div className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-loader"></div>
      )}
    </div>
  );
};

export default TopLoader;