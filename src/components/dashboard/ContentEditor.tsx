
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Upload, Eye, EyeOff, Code, Edit, Image, Video } from "lucide-react";

// Mock data for the pages and sections
const PAGES = [
  { id: "home", title: "Home Page" },
  { id: "about", title: "About Us" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" }
];

// Mock data for page sections
const PAGE_SECTIONS = {
  "home": [
    { id: "hero", title: "Hero Section", type: "hero" },
    { id: "services", title: "Services Overview", type: "services" },
    { id: "testimonials", title: "Testimonials", type: "testimonials" },
    { id: "cta", title: "Call to Action", type: "cta" }
  ],
  "about": [
    { id: "intro", title: "Introduction", type: "text" },
    { id: "team", title: "Our Team", type: "team" },
    { id: "history", title: "Company History", type: "timeline" },
    { id: "values", title: "Our Values", type: "values" }
  ],
  "services": [
    { id: "intro", title: "Services Introduction", type: "hero" },
    { id: "service1", title: "Service 1", type: "service" },
    { id: "service2", title: "Service 2", type: "service" },
    { id: "service3", title: "Service 3", type: "service" },
    { id: "pricing", title: "Pricing Table", type: "pricing" }
  ],
  "contact": [
    { id: "info", title: "Contact Information", type: "contact-info" },
    { id: "form", title: "Contact Form", type: "form" },
    { id: "map", title: "Location Map", type: "map" }
  ]
};

// Mock section content
const SECTION_CONTENT = {
  "home-hero": {
    title: "Welcome to Our Website",
    subtitle: "We provide amazing services",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec magna efficitur hendrerit.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    video: "",
    cta: "Learn More",
    visible: true,
    customHtmlBefore: "",
    customHtmlAfter: ""
  }
};

// Get initial content (either from mock or empty template)
const getInitialContent = (pageId: string, sectionId: string) => {
  const key = `${pageId}-${sectionId}`;
  return SECTION_CONTENT[key as keyof typeof SECTION_CONTENT] || {
    title: "",
    subtitle: "",
    content: "",
    image: "",
    video: "",
    cta: "",
    visible: true,
    customHtmlBefore: "",
    customHtmlAfter: ""
  };
};

interface ContentEditorProps {
  initialSection?: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialSection }) => {
  const [activePage, setActivePage] = useState(PAGES[0].id);
  const [activeSection, setActiveSection] = useState(initialSection || "");
  const [activeTab, setActiveTab] = useState<string>("text");
  const [content, setContent] = useState(getInitialContent("home", "hero"));

  // If initialSection is provided, find the parent page
  useEffect(() => {
    if (initialSection) {
      // Find which page contains this section
      for (const [pageId, sections] of Object.entries(PAGE_SECTIONS)) {
        if (sections.some(section => section.id === initialSection)) {
          setActivePage(pageId);
          setActiveSection(initialSection);
          setContent(getInitialContent(pageId, initialSection));
          break;
        }
      }
    }
  }, [initialSection]);

  // Handle section selection
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const sections = PAGE_SECTIONS[activePage as keyof typeof PAGE_SECTIONS] || [];
    const section = sections.find(s => s.id === sectionId);
    
    if (section) {
      setContent(getInitialContent(activePage, sectionId));
      
      // Set the appropriate tab based on section type
      if (section.type === "hero" || section.type === "text") {
        setActiveTab("text");
      } else if (section.type === "team" || section.type === "services") {
        setActiveTab("media");
      }
    }
  };

  // Handle content change
  const handleContentChange = (field: string, value: string | boolean) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUploadImage = () => {
    // In a real app, this would open a file picker and upload the image
    // For now, just simulate setting a new image URL
    const imageUrl = "https://images.unsplash.com/photo-1500673922987-e212871fec22";
    handleContentChange("image", imageUrl);
  };

  const handleEmbedVideo = () => {
    // In a real app, this would validate the YouTube URL and extract the embed code
    const youtubeEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    handleContentChange("video", youtubeEmbedUrl);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Editor</CardTitle>
          <CardDescription>
            Select a page and section to edit its content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="page-select">Select Page</Label>
              <Select value={activePage} onValueChange={(value) => {
                setActivePage(value);
                setActiveSection("");
              }}>
                <SelectTrigger id="page-select">
                  <SelectValue placeholder="Select page" />
                </SelectTrigger>
                <SelectContent>
                  {PAGES.map((page) => (
                    <SelectItem key={page.id} value={page.id}>
                      {page.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="section-select">Select Section</Label>
              <Select 
                value={activeSection} 
                onValueChange={handleSectionChange}
                disabled={!activePage}
              >
                <SelectTrigger id="section-select">
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {PAGE_SECTIONS[activePage as keyof typeof PAGE_SECTIONS]?.map((section) => (
                    <SelectItem key={section.id} value={section.id}>
                      {section.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {activeSection && (
            <>
              <div className="flex items-center space-x-2 mb-6">
                <Switch 
                  id="section-visibility"
                  checked={content.visible}
                  onCheckedChange={(checked) => handleContentChange("visible", checked)}
                />
                <Label htmlFor="section-visibility" className="flex items-center cursor-pointer">
                  {content.visible ? (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      <span>Section is visible</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      <span>Section is hidden</span>
                    </>
                  )}
                </Label>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="text" className="flex items-center">
                    <Edit className="h-4 w-4 mr-2" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="media" className="flex items-center">
                    <Image className="h-4 w-4 mr-2" />
                    Media
                  </TabsTrigger>
                  <TabsTrigger value="html" className="flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Custom HTML
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={content.title}
                      onChange={(e) => handleContentChange("title", e.target.value)}
                      placeholder="Enter section title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={content.subtitle}
                      onChange={(e) => handleContentChange("subtitle", e.target.value)}
                      placeholder="Enter section subtitle"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Main Content</Label>
                    <Textarea
                      id="content"
                      value={content.content}
                      onChange={(e) => handleContentChange("content", e.target.value)}
                      placeholder="Enter main content text"
                      rows={6}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cta">Call to Action Text</Label>
                    <Input
                      id="cta"
                      value={content.cta}
                      onChange={(e) => handleContentChange("cta", e.target.value)}
                      placeholder="Enter call to action text"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="media" className="space-y-6">
                  <div className="space-y-4">
                    <Label className="block">Feature Image</Label>
                    {content.image ? (
                      <div className="relative rounded-md overflow-hidden border">
                        <img 
                          src={content.image} 
                          alt="Section feature" 
                          className="w-full h-48 object-cover"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="absolute top-2 right-2 bg-background/90"
                          onClick={handleUploadImage}
                        >
                          Replace Image
                        </Button>
                      </div>
                    ) : (
                      <div className="border rounded-md p-8 flex flex-col items-center justify-center bg-muted/30">
                        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground mb-4">No image selected</p>
                        <Button onClick={handleUploadImage}>
                          Upload Image
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <Label className="block">Video Embed</Label>
                    {content.video ? (
                      <div className="relative rounded-md overflow-hidden border">
                        <iframe
                          src={content.video}
                          title="Embedded video"
                          className="w-full h-48"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="absolute top-2 right-2 bg-background/90"
                          onClick={handleEmbedVideo}
                        >
                          Replace Video
                        </Button>
                      </div>
                    ) : (
                      <div className="border rounded-md p-8 flex flex-col items-center justify-center bg-muted/30">
                        <Video className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground mb-4">No video embedded</p>
                        <div className="space-y-2 w-full max-w-sm">
                          <Input 
                            placeholder="YouTube or Vimeo URL" 
                            className="mb-2"
                          />
                          <Button onClick={handleEmbedVideo} className="w-full">
                            Embed Video
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="html" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-html-before">Custom HTML Before Section</Label>
                    <Textarea
                      id="custom-html-before"
                      value={content.customHtmlBefore}
                      onChange={(e) => handleContentChange("customHtmlBefore", e.target.value)}
                      placeholder="Enter custom HTML to be placed before the section"
                      rows={6}
                      className="font-mono"
                    />
                    <p className="text-sm text-muted-foreground">Add custom HTML code that will appear above this section.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-html-after">Custom HTML After Section</Label>
                    <Textarea
                      id="custom-html-after"
                      value={content.customHtmlAfter}
                      onChange={(e) => handleContentChange("customHtmlAfter", e.target.value)}
                      placeholder="Enter custom HTML to be placed after the section"
                      rows={6}
                      className="font-mono"
                    />
                    <p className="text-sm text-muted-foreground">Add custom HTML code that will appear below this section.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </CardContent>
      </Card>
      
      {activeSection && (
        <div className="flex justify-end">
          <Button>
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;
