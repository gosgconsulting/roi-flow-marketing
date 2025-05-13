
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sidebar,
  SidebarContent, 
  SidebarHeader, 
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Save, Palette, Type, Edit, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import ColorCustomizer from "@/components/dashboard/ColorCustomizer";
import TypographyCustomizer from "@/components/dashboard/TypographyCustomizer";
import ContentEditor from "@/components/dashboard/ContentEditor";
import PreviewPanel from "@/components/dashboard/PreviewPanel";

const CustomDashboard = () => {
  const [activeTab, setActiveTab] = useState("colors");
  const [previewVisible, setPreviewVisible] = useState(true);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    // This would connect to WordPress backend in production
    toast({
      title: "Changes saved",
      description: "Your customizations have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          {/* Dashboard Sidebar */}
          <Sidebar>
            <SidebarHeader className="flex h-14 items-center border-b px-4 lg:h-[60px]">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-lg">Theme Customizer</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeTab === "colors"}
                    onClick={() => setActiveTab("colors")}
                  >
                    <Palette className="h-5 w-5 mr-3" />
                    <span>Colors</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeTab === "typography"}
                    onClick={() => setActiveTab("typography")}
                  >
                    <Type className="h-5 w-5 mr-3" />
                    <span>Typography</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeTab === "content"}
                    onClick={() => setActiveTab("content")}
                  >
                    <Edit className="h-5 w-5 mr-3" />
                    <span>Content Editor</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarSeparator />
              <div className="px-4 py-2">
                <Button 
                  onClick={handleSaveChanges} 
                  className="w-full bg-brandPurple hover:bg-brandPurple/90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
              <div className="px-4 py-2">
                <Button 
                  variant="outline"
                  onClick={() => setPreviewVisible(!previewVisible)} 
                  className="w-full"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {previewVisible ? "Hide Preview" : "Show Preview"}
                </Button>
              </div>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="h-14 border-b flex items-center px-6 lg:h-[60px]">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex h-[calc(100vh-60px)]">
              {/* Customization Panel */}
              <div className={`${previewVisible ? 'w-1/2' : 'w-full'} p-6 overflow-auto transition-all`}>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="typography">Typography</TabsTrigger>
                    <TabsTrigger value="content">Content</TabsTrigger>
                  </TabsList>
                  <TabsContent value="colors" className="space-y-4">
                    <ColorCustomizer />
                  </TabsContent>
                  <TabsContent value="typography" className="space-y-4">
                    <TypographyCustomizer />
                  </TabsContent>
                  <TabsContent value="content" className="space-y-4">
                    <ContentEditor />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Preview Panel */}
              {previewVisible && (
                <div className="w-1/2 border-l">
                  <PreviewPanel />
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default CustomDashboard;
