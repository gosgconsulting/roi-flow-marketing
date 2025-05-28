
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import { useAdminCheck } from "@/hooks/use-admin-check";

const AdminTopBar = () => {
  const { isAdmin, toggleAdminMode } = useAdminCheck();

  if (!isAdmin) return null;

  return (
    <div className="bg-slate-900 text-white px-4 py-2 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Admin Mode</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-slate-800"
            onClick={toggleAdminMode}
          >
            Exit Admin
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white hover:bg-slate-800"
          >
            <Link to="/admin">
              <Settings className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </Button>
          
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="text-sm">Admin User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar;
