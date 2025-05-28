
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Key, Plus, Trash2, Code, Save, Eye, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
}

const IntegrationsManager = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [gtmId, setGtmId] = useState("");
  const [gaId, setGaId] = useState("");
  const [gscProperty, setGscProperty] = useState("");
  const [headCode, setHeadCode] = useState("");
  const [bodyCode, setBodyCode] = useState("");
  const { toast } = useToast();

  const generateApiKey = () => {
    const prefix = "bapi_";
    const randomPart = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    return prefix + randomPart;
  };

  const createApiKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for your API key",
        variant: "destructive",
      });
      return;
    }

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName.trim(),
      key: generateApiKey(),
      createdAt: new Date().toISOString(),
    };

    setApiKeys(prev => [...prev, newKey]);
    setNewKeyName("");
    setShowCreateForm(false);
    
    toast({
      title: "API Key Created",
      description: `Your new API key "${newKey.name}" has been generated successfully.`,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
  };

  const deleteApiKey = (id: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== id));
    toast({
      title: "API Key Deleted",
      description: "The API key has been removed successfully.",
    });
  };

  const handleSaveTracking = () => {
    localStorage.setItem('tracking_gtm', gtmId);
    localStorage.setItem('tracking_ga', gaId);
    localStorage.setItem('tracking_gsc', gscProperty);
    localStorage.setItem('tracking_head', headCode);
    localStorage.setItem('tracking_body', bodyCode);
    
    toast({
      title: "Configuration saved",
      description: "Your tracking and integration settings have been saved successfully.",
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

  const generateGSCCode = () => {
    if (!gscProperty) return "";
    return `<meta name="google-site-verification" content="${gscProperty}" />`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Integrations & Tracking</h1>
        <p className="text-gray-600 mt-2">
          Manage API keys, tracking codes, and external integrations for your website.
        </p>
      </div>

      <Tabs defaultValue="api-keys" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="tracking">Tracking Setup</TabsTrigger>
          <TabsTrigger value="custom-code">Custom Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="api-keys">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Blog API
              </CardTitle>
              <CardDescription>
                Generate API keys to allow external sites to create and manage content on your website.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">API Keys</h3>
                <Button 
                  onClick={() => setShowCreateForm(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Create API Key
                </Button>
              </div>

              {showCreateForm && (
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="keyName">API Key Name</Label>
                        <Input
                          id="keyName"
                          placeholder="e.g., My Blog Platform"
                          value={newKeyName}
                          onChange={(e) => setNewKeyName(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={createApiKey}>Generate API Key</Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowCreateForm(false);
                            setNewKeyName("");
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {apiKeys.length === 0 && !showCreateForm ? (
                <div className="text-center py-8 text-gray-500">
                  <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No API keys created yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {apiKeys.map((apiKey) => (
                    <Card key={apiKey.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2 flex-1">
                            <h4 className="font-semibold">{apiKey.name}</h4>
                            <div className="flex items-center gap-2">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                {apiKey.key}
                              </code>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyToClipboard(apiKey.key)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="text-xs text-gray-500">
                              Created: {new Date(apiKey.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteApiKey(apiKey.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <BarChart3 className="h-5 w-5" />
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Google Search Console</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="gsc-property">Verification Code</Label>
                  <Input
                    id="gsc-property"
                    placeholder="verification code"
                    value={gscProperty}
                    onChange={(e) => setGscProperty(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter your GSC verification meta tag content
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

            {gscProperty && (
              <Card>
                <CardHeader>
                  <CardTitle>Google Search Console Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{generateGSCCode()}</code>
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

      <div className="flex justify-end">
        <Button onClick={handleSaveTracking} className="flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save Configuration</span>
        </Button>
      </div>
    </div>
  );
};

export default IntegrationsManager;
