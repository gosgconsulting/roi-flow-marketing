
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Monitor, RefreshCw } from "lucide-react";

const PreviewPanel = () => {
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate refresh delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b px-4 py-2 flex justify-between items-center">
        <h2 className="font-medium">Live Preview</h2>
        <div className="flex items-center">
          <Tabs value={deviceType} onValueChange={(value) => setDeviceType(value as 'desktop' | 'tablet' | 'mobile')}>
            <TabsList className="mr-2">
              <TabsTrigger value="desktop" title="Desktop Preview">
                <Monitor className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="tablet" title="Tablet Preview">
                <Tablet className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="mobile" title="Mobile Preview">
                <Smartphone className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleRefresh}
            disabled={isLoading}
            className={isLoading ? 'animate-spin' : ''}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-auto flex justify-center">
        <div 
          className={`
            border rounded-md shadow-sm bg-white overflow-auto
            ${deviceType === 'desktop' ? 'w-full max-w-full' : ''}
            ${deviceType === 'tablet' ? 'w-[768px] max-w-full' : ''}
            ${deviceType === 'mobile' ? 'w-[375px] max-w-full' : ''}
          `}
        >
          <div className="relative">
            <iframe
              src="/"
              title="Website Preview"
              className="w-full border-none"
              style={{ 
                height: 'calc(100vh - 160px)',
                opacity: isLoading ? 0.6 : 1,
                transition: 'opacity 0.2s'
              }}
            ></iframe>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
