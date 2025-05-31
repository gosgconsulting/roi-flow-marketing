
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { saveToLocalStorage, loadFromLocalStorage } from "@/lib/utils-dashboard";

// Enhanced theme color preset options
const COLOR_PRESETS = [
  {
    name: "Default",
    primary: "#9b87f5",
    secondary: "#7E69AB",
    accent: "#F94E40",
    background: "#FFFFFF",
    text: "#333333",
    gradientStart: "#9b87f5",
    gradientEnd: "#7E69AB",
    labelColor: "#666666",
    footerDarkText: "#FFFFFF"
  },
  {
    name: "Ocean",
    primary: "#0EA5E9",
    secondary: "#0284C7",
    accent: "#F59E0B",
    background: "#F0F9FF",
    text: "#0F172A",
    gradientStart: "#0EA5E9",
    gradientEnd: "#10B981",
    labelColor: "#475569",
    footerDarkText: "#F8FAFC"
  },
  {
    name: "Forest",
    primary: "#10B981",
    secondary: "#059669",
    accent: "#F43F5E",
    background: "#F0FDF4",
    text: "#064E3B",
    gradientStart: "#10B981",
    gradientEnd: "#059669",
    labelColor: "#374151",
    footerDarkText: "#F9FAFB"
  },
  {
    name: "Sunset",
    primary: "#F97316",
    secondary: "#EA580C",
    accent: "#8B5CF6",
    background: "#FFEDD5",
    text: "#431407",
    gradientStart: "#F97316",
    gradientEnd: "#8B5CF6",
    labelColor: "#92400E",
    footerDarkText: "#FEF3C7"
  }
];

const ColorCustomizer = () => {
  const [activeTab, setActiveTab] = useState("presets");
  const [colors, setColors] = useState({
    primary: "#9b87f5",
    secondary: "#7E69AB",
    accent: "#F94E40",
    background: "#FFFFFF",
    text: "#333333",
    gradientStart: "#9b87f5",
    gradientEnd: "#7E69AB",
    labelColor: "#666666",
    footerDarkText: "#FFFFFF"
  });

  // Load saved colors on component mount
  useEffect(() => {
    const savedColors = loadFromLocalStorage('website-colors');
    if (savedColors) {
      setColors(savedColors);
      applyColorsGlobally(savedColors);
    }
  }, []);

  const applyColorsGlobally = (colorConfig: typeof colors) => {
    const root = document.documentElement;
    
    // Apply to CSS custom properties for global usage
    root.style.setProperty('--brand-primary', colorConfig.primary);
    root.style.setProperty('--brand-secondary', colorConfig.secondary);
    root.style.setProperty('--brand-accent', colorConfig.accent);
    root.style.setProperty('--brand-background', colorConfig.background);
    root.style.setProperty('--brand-text', colorConfig.text);
    
    // Apply gradient colors
    root.style.setProperty('--gradient-start', colorConfig.gradientStart);
    root.style.setProperty('--gradient-end', colorConfig.gradientEnd);
    
    // Apply label and footer colors
    root.style.setProperty('--label-color', colorConfig.labelColor);
    root.style.setProperty('--footer-dark-text', colorConfig.footerDarkText);
    
    // Apply to existing Tailwind CSS variables for compatibility
    root.style.setProperty('--primary', colorConfig.primary);
    root.style.setProperty('--secondary', colorConfig.secondary);
    root.style.setProperty('--accent', colorConfig.accent);
    root.style.setProperty('--background', colorConfig.background);
    root.style.setProperty('--foreground', colorConfig.text);
    
    // Apply to specific brand colors used throughout the site
    root.style.setProperty('--brand-purple', colorConfig.primary);
    root.style.setProperty('--brand-teal', colorConfig.secondary);
    root.style.setProperty('--coral', colorConfig.accent);
    
    // Save to localStorage for persistence
    saveToLocalStorage('website-colors', colorConfig);
  };

  const handleColorChange = (colorKey: string, value: string) => {
    const newColors = {
      ...colors,
      [colorKey]: value
    };
    setColors(newColors);
    applyColorsGlobally(newColors);
  };

  const applyColorPreset = (preset: typeof COLOR_PRESETS[0]) => {
    const newColors = {
      primary: preset.primary,
      secondary: preset.secondary,
      accent: preset.accent,
      background: preset.background,
      text: preset.text,
      gradientStart: preset.gradientStart,
      gradientEnd: preset.gradientEnd,
      labelColor: preset.labelColor,
      footerDarkText: preset.footerDarkText
    };
    setColors(newColors);
    applyColorsGlobally(newColors);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Color Customization</CardTitle>
          <CardDescription>
            Customize the colors of your website including gradients, labels, and footer text. Changes will be applied globally across all pages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="presets">Presets</TabsTrigger>
              <TabsTrigger value="basic">Basic Colors</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Colors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="presets" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COLOR_PRESETS.map((preset, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    onClick={() => applyColorPreset(preset)}
                  >
                    <div className="font-medium mb-2">{preset.name}</div>
                    <div className="flex space-x-2 mb-2">
                      <div 
                        className="w-8 h-8 rounded-full" 
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div 
                        className="w-8 h-8 rounded-full" 
                        style={{ backgroundColor: preset.secondary }}
                      />
                      <div 
                        className="w-8 h-8 rounded-full" 
                        style={{ backgroundColor: preset.accent }}
                      />
                    </div>
                    <div 
                      className="w-full h-4 rounded"
                      style={{ 
                        background: `linear-gradient(to right, ${preset.gradientStart}, ${preset.gradientEnd})` 
                      }}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="basic" className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex space-x-2 items-center">
                      <div 
                        className="w-8 h-8 rounded-full border" 
                        style={{ backgroundColor: colors.primary }}
                      />
                      <Input
                        id="primaryColor"
                        type="text"
                        value={colors.primary}
                        onChange={(e) => handleColorChange("primary", e.target.value)}
                        className="font-mono"
                      />
                      <input
                        type="color"
                        value={colors.primary}
                        onChange={(e) => handleColorChange("primary", e.target.value)}
                        className="w-10 h-10 p-0 border-0"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex space-x-2 items-center">
                      <div 
                        className="w-8 h-8 rounded-full border" 
                        style={{ backgroundColor: colors.secondary }}
                      />
                      <Input
                        id="secondaryColor"
                        type="text"
                        value={colors.secondary}
                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                        className="font-mono"
                      />
                      <input
                        type="color"
                        value={colors.secondary}
                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                        className="w-10 h-10 p-0 border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <div className="flex space-x-2 items-center">
                      <div 
                        className="w-8 h-8 rounded-full border" 
                        style={{ backgroundColor: colors.accent }}
                      />
                      <Input
                        id="accentColor"
                        type="text"
                        value={colors.accent}
                        onChange={(e) => handleColorChange("accent", e.target.value)}
                        className="font-mono"
                      />
                      <input
                        type="color"
                        value={colors.accent}
                        onChange={(e) => handleColorChange("accent", e.target.value)}
                        className="w-10 h-10 p-0 border-0"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="backgroundColor">Background Color</Label>
                    <div className="flex space-x-2 items-center">
                      <div 
                        className="w-8 h-8 rounded-full border" 
                        style={{ backgroundColor: colors.background }}
                      />
                      <Input
                        id="backgroundColor"
                        type="text"
                        value={colors.background}
                        onChange={(e) => handleColorChange("background", e.target.value)}
                        className="font-mono"
                      />
                      <input
                        type="color"
                        value={colors.background}
                        onChange={(e) => handleColorChange("background", e.target.value)}
                        className="w-10 h-10 p-0 border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="textColor">Text Color</Label>
                  <div className="flex space-x-2 items-center">
                    <div 
                      className="w-8 h-8 rounded-full border" 
                      style={{ backgroundColor: colors.text }}
                    />
                    <Input
                      id="textColor"
                      type="text"
                      value={colors.text}
                      onChange={(e) => handleColorChange("text", e.target.value)}
                      className="font-mono"
                    />
                    <input
                      type="color"
                      value={colors.text}
                      onChange={(e) => handleColorChange("text", e.target.value)}
                      className="w-10 h-10 p-0 border-0"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Gradient Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gradientStart">Gradient Start Color</Label>
                      <div className="flex space-x-2 items-center">
                        <div 
                          className="w-8 h-8 rounded-full border" 
                          style={{ backgroundColor: colors.gradientStart }}
                        />
                        <Input
                          id="gradientStart"
                          type="text"
                          value={colors.gradientStart}
                          onChange={(e) => handleColorChange("gradientStart", e.target.value)}
                          className="font-mono"
                        />
                        <input
                          type="color"
                          value={colors.gradientStart}
                          onChange={(e) => handleColorChange("gradientStart", e.target.value)}
                          className="w-10 h-10 p-0 border-0"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gradientEnd">Gradient End Color</Label>
                      <div className="flex space-x-2 items-center">
                        <div 
                          className="w-8 h-8 rounded-full border" 
                          style={{ backgroundColor: colors.gradientEnd }}
                        />
                        <Input
                          id="gradientEnd"
                          type="text"
                          value={colors.gradientEnd}
                          onChange={(e) => handleColorChange("gradientEnd", e.target.value)}
                          className="font-mono"
                        />
                        <input
                          type="color"
                          value={colors.gradientEnd}
                          onChange={(e) => handleColorChange("gradientEnd", e.target.value)}
                          className="w-10 h-10 p-0 border-0"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Gradient Preview</Label>
                    <div 
                      className="w-full h-12 rounded border"
                      style={{ 
                        background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})` 
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Specialized Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="labelColor">Label Color</Label>
                      <div className="flex space-x-2 items-center">
                        <div 
                          className="w-8 h-8 rounded-full border" 
                          style={{ backgroundColor: colors.labelColor }}
                        />
                        <Input
                          id="labelColor"
                          type="text"
                          value={colors.labelColor}
                          onChange={(e) => handleColorChange("labelColor", e.target.value)}
                          className="font-mono"
                        />
                        <input
                          type="color"
                          value={colors.labelColor}
                          onChange={(e) => handleColorChange("labelColor", e.target.value)}
                          className="w-10 h-10 p-0 border-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Used for "Digital marketing agency" labels</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footerDarkText">Footer Text (Dark Background)</Label>
                      <div className="flex space-x-2 items-center">
                        <div 
                          className="w-8 h-8 rounded-full border" 
                          style={{ backgroundColor: colors.footerDarkText }}
                        />
                        <Input
                          id="footerDarkText"
                          type="text"
                          value={colors.footerDarkText}
                          onChange={(e) => handleColorChange("footerDarkText", e.target.value)}
                          className="font-mono"
                        />
                        <input
                          type="color"
                          value={colors.footerDarkText}
                          onChange={(e) => handleColorChange("footerDarkText", e.target.value)}
                          className="w-10 h-10 p-0 border-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Text color for footer on dark backgrounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>See how your color choices affect UI elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Gradient Headlines</h3>
              <div className="space-y-2">
                <h1 
                  className="text-3xl font-bold"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Your Compelling Headline Here
                </h1>
                <p style={{ color: colors.labelColor }} className="text-sm font-medium">
                  Digital marketing agency
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button style={{backgroundColor: colors.primary, color: "#fff"}}>
                  Primary Button
                </Button>
                <Button style={{backgroundColor: colors.secondary, color: "#fff"}}>
                  Secondary Button
                </Button>
                <Button style={{backgroundColor: colors.accent, color: "#fff"}}>
                  Accent Button
                </Button>
                <Button variant="outline" style={{borderColor: colors.primary, color: colors.primary}}>
                  Outline Button
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Footer Preview (Dark Background)</h3>
              <div className="p-4 rounded bg-gray-900" style={{color: colors.footerDarkText}}>
                <h3 className="font-medium mb-2">Footer Content</h3>
                <p className="text-sm opacity-90">This is how footer text will appear on dark backgrounds.</p>
                <p className="text-xs opacity-75 mt-2">© 2024 Your Company. All rights reserved.</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4" style={{borderColor: colors.primary}}>
                  <h3 className="font-medium mb-2" style={{color: colors.primary}}>Card Title</h3>
                  <p style={{color: colors.text}}>Card content with your selected text color.</p>
                  <p style={{color: colors.labelColor}} className="text-sm mt-2">Label text example</p>
                </div>
                <div className="rounded-lg p-4" style={{backgroundColor: colors.primary, color: "#fff"}}>
                  <h3 className="font-medium mb-2">Card Title</h3>
                  <p>Card content with light text.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorCustomizer;
