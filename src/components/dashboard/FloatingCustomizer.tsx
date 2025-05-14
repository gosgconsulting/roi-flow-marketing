
import React, { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContentEditor from "@/components/dashboard/ContentEditor";
import ColorCustomizer from "@/components/dashboard/ColorCustomizer";
import TypographyCustomizer from "@/components/dashboard/TypographyCustomizer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FloatingCustomizerProps {
  isAdmin: boolean;
}

const FloatingCustomizer: React.FC<FloatingCustomizerProps> = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");

  return (
    <>
      <Button
        variant="branded"
        size="icon"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
      >
        <Settings className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Dashboard Customizer</DialogTitle>
          </DialogHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingCustomizer;
