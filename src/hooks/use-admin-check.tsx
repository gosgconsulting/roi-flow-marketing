
import { useState, useEffect } from "react";

// This would be replaced with actual WordPress authentication in a real WP environment
export const useAdminCheck = () => {
  const [isAdmin, setIsAdmin] = useState(true); // Changed default to true for everyone
  const [isLoading, setIsLoading] = useState(false); // No need to load, so set to false by default

  // Function to toggle admin mode (for demo purposes only)
  const toggleAdminMode = () => {
    const newState = !isAdmin;
    localStorage.setItem("wp_admin_mode", String(newState));
    setIsAdmin(newState);
  };

  return { isAdmin, isLoading, toggleAdminMode };
};
