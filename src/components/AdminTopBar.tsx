
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import { useAdminCheck } from "@/hooks/use-admin-check";

const AdminTopBar = () => {
  const { isAdmin, toggleAdminMode } = useAdminCheck();

  // Hide the top bar completely
  return null;
};

export default AdminTopBar;
