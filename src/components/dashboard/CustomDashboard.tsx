
import React from "react";
import CustomDashboard from "@/pages/CustomDashboard";

// This is an intermediate component to resolve the circular dependency
// The actual implementation is in src/pages/CustomDashboard.tsx
const CustomDashboardComponent = () => {
  return <CustomDashboard />;
};

export default CustomDashboardComponent;
