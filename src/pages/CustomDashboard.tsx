
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentEditor from "@/components/dashboard/ContentEditor";
import ColorCustomizer from "@/components/dashboard/ColorCustomizer";
import TypographyCustomizer from "@/components/dashboard/TypographyCustomizer";
import PreviewPanel from "@/components/dashboard/PreviewPanel";
import { useAdminCheck } from "@/hooks/use-admin-check";

const CustomDashboardPage = () => {
  const { isAdmin, isLoading } = useAdminCheck();

  if (isLoading) return <div>Loading...</div>;
  
  if (!isAdmin) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You must be an administrator to access this page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Website Customizer</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="content">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="content" className="flex-1">Content Editor</TabsTrigger>
              <TabsTrigger value="colors" className="flex-1">Colors</TabsTrigger>
              <TabsTrigger value="typography" className="flex-1">Typography</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content">
              <ContentEditor />
            </TabsContent>
            
            <TabsContent value="colors">
              <ColorCustomizer />
            </TabsContent>
            
            <TabsContent value="typography">
              <TypographyCustomizer />
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
};

export default CustomDashboardPage;
