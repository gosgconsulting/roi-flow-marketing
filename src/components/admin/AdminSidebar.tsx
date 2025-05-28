
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Mail, 
  Settings,
  Users,
  BarChart3
} from "lucide-react";

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "pages", label: "Pages", icon: FileText },
    { id: "forms", label: "Forms", icon: Mail },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
