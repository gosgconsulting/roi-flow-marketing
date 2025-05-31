
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { saveToLocalStorage, loadFromLocalStorage, loadGoogleFont } from "@/lib/utils-dashboard";

// Font presets
const TYPOGRAPHY_PRESETS = [
  {
    name: "Default",
    headingFont: "Inter",
    bodyFont: "Inter",
    baseSize: 16
  },
  {
    name: "Modern",
    headingFont: "Montserrat",
    bodyFont: "Open Sans",
    baseSize: 16
  },
  {
    name: "Classic",
    headingFont: "Playfair Display",
    bodyFont: "Source Sans Pro",
    baseSize: 16
  },
  {
    name: "Minimal",
    headingFont: "Roboto",
    bodyFont: "Roboto",
    baseSize: 15
  }
];

// Popular Google Fonts
const GOOGLE_FONTS = [
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat",
  "Source Sans Pro", "Oswald", "Raleway", "Playfair Display",
  "Poppins", "Merriweather", "Nunito", "Ubuntu", "Rubik",
  "Work Sans", "Fira Sans", "Quicksand", "PT Sans"
];

const TypographyCustomizer = () => {
  const [activeTab, setActiveTab] = useState("presets");
  const [typography, setTypography] = useState({
    headingFont: "Inter",
    bodyFont: "Inter",
    baseSize: 16,
    headingWeight: 700,
    bodyWeight: 400
  });
  
  // Load saved typography on component mount
  useEffect(() => {
    const savedTypography = loadFromLocalStorage('website-typography');
    if (savedTypography) {
      setTypography(savedTypography);
      applyTypographyGlobally(savedTypography);
    }
  }, []);

  const applyTypographyGlobally = (typographyConfig: typeof typography) => {
    // Load Google Fonts
    loadGoogleFont(typographyConfig.headingFont);
    if (typographyConfig.bodyFont !== typographyConfig.headingFont) {
      loadGoogleFont(typographyConfig.bodyFont);
    }

    // Apply to CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--font-heading', `"${typographyConfig.headingFont}", sans-serif`);
    root.style.setProperty('--font-body', `"${typographyConfig.bodyFont}", sans-serif`);
    root.style.setProperty('--font-base-size', `${typographyConfig.baseSize}px`);
    root.style.setProperty('--font-heading-weight', typographyConfig.headingWeight.toString());
    root.style.setProperty('--font-body-weight', typographyConfig.bodyWeight.toString());

    // Apply to body element for global effect
    document.body.style.fontFamily = `"${typographyConfig.bodyFont}", sans-serif`;
    document.body.style.fontSize = `${typographyConfig.baseSize}px`;
    document.body.style.fontWeight = typographyConfig.bodyWeight.toString();

    // Save to localStorage for persistence
    saveToLocalStorage('website-typography', typographyConfig);
  };

  const handleTypographyChange = (key: string, value: string | number) => {
    const newTypography = {
      ...typography,
      [key]: value
    };
    setTypography(newTypography);
    applyTypographyGlobally(newTypography);
  };

  const applyPreset = (preset: typeof TYPOGRAPHY_PRESETS[0]) => {
    const newTypography = {
      ...typography,
      headingFont: preset.headingFont,
      bodyFont: preset.bodyFont,
      baseSize: preset.baseSize
    };
    setTypography(newTypography);
    applyTypographyGlobally(newTypography);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Typography Customization</CardTitle>
          <CardDescription>
            Customize the fonts and typography of your website. Changes will be applied globally across all pages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="presets">Presets</TabsTrigger>
              <TabsTrigger value="custom">Custom Typography</TabsTrigger>
            </TabsList>

            <TabsContent value="presets" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TYPOGRAPHY_PRESETS.map((preset, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    onClick={() => applyPreset(preset)}
                  >
                    <div className="font-medium mb-2">{preset.name}</div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Heading</div>
                        <div style={{ fontFamily: preset.headingFont }} className="text-lg font-bold truncate">
                          {preset.headingFont}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Body</div>
                        <div style={{ fontFamily: preset.bodyFont }} className="truncate">
                          {preset.bodyFont}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="headingFont">Heading Font</Label>
                    <Select 
                      value={typography.headingFont}
                      onValueChange={(value) => handleTypographyChange("headingFont", value)}
                    >
                      <SelectTrigger id="headingFont">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        {GOOGLE_FONTS.map((font) => (
                          <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                            {font}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bodyFont">Body Font</Label>
                    <Select 
                      value={typography.bodyFont}
                      onValueChange={(value) => handleTypographyChange("bodyFont", value)}
                    >
                      <SelectTrigger id="bodyFont">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        {GOOGLE_FONTS.map((font) => (
                          <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                            {font}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="baseSize">Base Font Size ({typography.baseSize}px)</Label>
                  </div>
                  <Slider
                    id="baseSize"
                    min={12}
                    max={20}
                    step={1}
                    value={[typography.baseSize]}
                    onValueChange={([value]) => handleTypographyChange("baseSize", value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="headingWeight">Heading Weight</Label>
                    <Select 
                      value={typography.headingWeight.toString()}
                      onValueChange={(value) => handleTypographyChange("headingWeight", parseInt(value))}
                    >
                      <SelectTrigger id="headingWeight">
                        <SelectValue placeholder="Select weight" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="400">Regular (400)</SelectItem>
                        <SelectItem value="500">Medium (500)</SelectItem>
                        <SelectItem value="600">Semibold (600)</SelectItem>
                        <SelectItem value="700">Bold (700)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bodyWeight">Body Weight</Label>
                    <Select 
                      value={typography.bodyWeight.toString()}
                      onValueChange={(value) => handleTypographyChange("bodyWeight", parseInt(value))}
                    >
                      <SelectTrigger id="bodyWeight">
                        <SelectValue placeholder="Select weight" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300">Light (300)</SelectItem>
                        <SelectItem value="400">Regular (400)</SelectItem>
                        <SelectItem value="500">Medium (500)</SelectItem>
                        <SelectItem value="600">Semibold (600)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Typography Preview</CardTitle>
          <CardDescription>See how your font choices look</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 
                style={{ 
                  fontFamily: typography.headingFont, 
                  fontWeight: typography.headingWeight
                }} 
                className="text-3xl"
              >
                Heading 1 - {typography.headingFont}
              </h1>
              
              <h2 
                style={{ 
                  fontFamily: typography.headingFont, 
                  fontWeight: typography.headingWeight
                }} 
                className="text-2xl"
              >
                Heading 2 - With your selected heading font
              </h2>
              
              <h3 
                style={{ 
                  fontFamily: typography.headingFont, 
                  fontWeight: typography.headingWeight
                }} 
                className="text-xl"
              >
                Heading 3 - Typography makes a big difference
              </h3>
              
              <div 
                style={{ 
                  fontFamily: typography.bodyFont,
                  fontWeight: typography.bodyWeight,
                  fontSize: `${typography.baseSize}px`
                }} 
                className="space-y-2"
              >
                <p>This is your body text using {typography.bodyFont} at {typography.baseSize}px size. Good typography improves readability and user experience across your website.</p>
                
                <p>A second paragraph to demonstrate line height and spacing between paragraphs. The right font pairing can create a harmonious visual hierarchy.</p>
                
                <ul className="list-disc pl-5">
                  <li>This is a list item using your body font</li>
                  <li>Typography includes the font, size, weight, and spacing</li>
                  <li>These settings will be applied throughout your website</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypographyCustomizer;
