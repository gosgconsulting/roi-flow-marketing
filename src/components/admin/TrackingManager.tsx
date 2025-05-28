
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Save, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrackingManager = () => {
  const { toast } = useToast();
  const [gtmId, setGtmId] = useState("");
  const [gaId, setGaId] = useState("");
  const [headCode, setHeadCode] = useState("");
  const [bodyCode, setBodyCode] = useState("");

  const handleSaveTracking = () => {
    // In a real WordPress implementation, this would save to the database
    localStorage.setItem('tracking_gtm', gtmId);
    localStorage.setItem('tracking_ga', gaId);
    localStorage.setItem('tracking_head', headCode);
    localStorage.setItem('tracking_body', bodyCode);
    
    toast({
      title: "Tracking codes saved",
      description: "Your tracking configuration has been saved successfully.",
    });
  };

  const generateGTMCode = () => {
    if (!gtmId) return "";
    return `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');</script>
<!-- End Google Tag Manager -->`;
  };

  const generateGACode = () => {
    if (!gaId) return "";
    return `<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaId}');
</script>
<!-- End Google Analytics -->`;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tracking Management</h1>
        <p className="text-gray-600 mt-2">Configure Google Tag Manager, Analytics, and custom tracking codes</p>
      </div>

      <Tabs defaultValue="quick-setup" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quick-setup">Quick Setup</TabsTrigger>
          <TabsTrigger value="custom-code">Custom Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="quick-setup" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Google Tag Manager</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="gtm-id">GTM Container ID</Label>
                  <Input
                    id="gtm-id"
                    placeholder="GTM-XXXXXXX"
                    value={gtmId}
                    onChange={(e) => setGtmId(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter your Google Tag Manager container ID
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Google Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ga-id">GA Measurement ID</Label>
                  <Input
                    id="ga-id"
                    placeholder="G-XXXXXXXXXX"
                    value={gaId}
                    onChange={(e) => setGaId(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter your Google Analytics 4 measurement ID
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="custom-code" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Head Section Code</CardTitle>
                <p className="text-sm text-gray-500">
                  Code that will be inserted in the &lt;head&gt; section
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="<!-- Custom head code here -->"
                  value={headCode}
                  onChange={(e) => setHeadCode(e.target.value)}
                  rows={10}
                  className="font-mono text-sm"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Body Section Code</CardTitle>
                <p className="text-sm text-gray-500">
                  Code that will be inserted at the beginning of &lt;body&gt;
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="<!-- Custom body code here -->"
                  value={bodyCode}
                  onChange={(e) => setBodyCode(e.target.value)}
                  rows={10}
                  className="font-mono text-sm"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <div className="space-y-6">
            {gtmId && (
              <Card>
                <CardHeader>
                  <CardTitle>Google Tag Manager Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{generateGTMCode()}</code>
                  </pre>
                </CardContent>
              </Card>
            )}

            {gaId && (
              <Card>
                <CardHeader>
                  <CardTitle>Google Analytics Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{generateGACode()}</code>
                  </pre>
                </CardContent>
              </Card>
            )}

            {headCode && (
              <Card>
                <CardHeader>
                  <CardTitle>Custom Head Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{headCode}</code>
                  </pre>
                </CardContent>
              </Card>
            )}

            {bodyCode && (
              <Card>
                <CardHeader>
                  <CardTitle>Custom Body Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{bodyCode}</code>
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end mt-6">
        <Button onClick={handleSaveTracking} className="flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save Tracking Configuration</span>
        </Button>
      </div>
    </div>
  );
};

export default TrackingManager;
