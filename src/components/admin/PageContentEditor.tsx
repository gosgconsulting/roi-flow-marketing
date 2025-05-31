
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Image, Save, Plus, Trash2 } from "lucide-react";

interface PageSection {
  id: string;
  name: string;
  type: 'hero' | 'content' | 'gallery' | 'cta';
  content: {
    headline?: string;
    subheadline?: string;
    paragraph?: string;
    buttonText?: string;
    buttonUrl?: string;
    images?: string[];
  };
}

interface PageContentEditorProps {
  pageTitle: string;
  pageId: string;
}

const PageContentEditor: React.FC<PageContentEditorProps> = ({ pageTitle, pageId }) => {
  const [sections, setSections] = useState<PageSection[]>([
    {
      id: 'section-1',
      name: 'Hero Section',
      type: 'hero',
      content: {
        headline: 'Welcome to Our Website',
        subheadline: 'Your digital marketing partner',
        paragraph: 'We help businesses grow online with our comprehensive digital marketing services.',
        buttonText: 'Get Started',
        buttonUrl: '/contact'
      }
    },
    {
      id: 'section-2',
      name: 'Services Section',
      type: 'content',
      content: {
        headline: 'Our Services',
        paragraph: 'Discover our range of digital marketing solutions designed to help your business succeed.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
      }
    },
    {
      id: 'section-3',
      name: 'Gallery Section',
      type: 'gallery',
      content: {
        headline: 'Our Work',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
      }
    },
    {
      id: 'section-4',
      name: 'Call to Action',
      type: 'cta',
      content: {
        headline: 'Ready to Get Started?',
        paragraph: 'Contact us today to discuss your digital marketing needs.',
        buttonText: 'Contact Us',
        buttonUrl: '/contact'
      }
    }
  ]);

  const [editingSection, setEditingSection] = useState<PageSection | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEditSection = (section: PageSection) => {
    setEditingSection({ ...section });
    setIsEditDialogOpen(true);
  };

  const handleSaveSection = () => {
    if (editingSection) {
      setSections(sections.map(section => 
        section.id === editingSection.id ? editingSection : section
      ));
      setIsEditDialogOpen(false);
      setEditingSection(null);
    }
  };

  const handleContentChange = (field: string, value: string) => {
    if (editingSection) {
      setEditingSection({
        ...editingSection,
        content: {
          ...editingSection.content,
          [field]: value
        }
      });
    }
  };

  const handleImageAdd = () => {
    if (editingSection) {
      const newImages = [...(editingSection.content.images || []), '/placeholder.svg'];
      setEditingSection({
        ...editingSection,
        content: {
          ...editingSection.content,
          images: newImages
        }
      });
    }
  };

  const handleImageRemove = (index: number) => {
    if (editingSection && editingSection.content.images) {
      const newImages = editingSection.content.images.filter((_, i) => i !== index);
      setEditingSection({
        ...editingSection,
        content: {
          ...editingSection.content,
          images: newImages
        }
      });
    }
  };

  const renderSectionTypeIcon = (type: string) => {
    switch (type) {
      case 'hero':
        return '🏠';
      case 'content':
        return '📝';
      case 'gallery':
        return '🖼️';
      case 'cta':
        return '🎯';
      default:
        return '📄';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Edit Page Content</h2>
          <p className="text-gray-600">Page: {pageTitle}</p>
        </div>
      </div>

      <div className="grid gap-4">
        {sections.map((section, index) => (
          <Card key={section.id} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{renderSectionTypeIcon(section.type)}</span>
                  <div>
                    <CardTitle className="text-lg">
                      Section {index + 1}: {section.name}
                    </CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {section.type}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditSection(section)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Content
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600">
                {section.content.headline && (
                  <p><strong>Headline:</strong> {section.content.headline}</p>
                )}
                {section.content.subheadline && (
                  <p><strong>Subheadline:</strong> {section.content.subheadline}</p>
                )}
                {section.content.paragraph && (
                  <p><strong>Content:</strong> {section.content.paragraph}</p>
                )}
                {section.content.buttonText && (
                  <p><strong>Button:</strong> {section.content.buttonText}</p>
                )}
                {section.content.images && section.content.images.length > 0 && (
                  <p><strong>Images:</strong> {section.content.images.length} image(s)</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Section Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Edit {editingSection?.name}
            </DialogTitle>
          </DialogHeader>
          
          {editingSection && (
            <Tabs defaultValue="content" className="w-full">
              <TabsList>
                <TabsTrigger value="content">Text Content</TabsTrigger>
                {(editingSection.type === 'gallery' || editingSection.content.images) && (
                  <TabsTrigger value="images">Images & Gallery</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="content" className="space-y-4">
                {editingSection.content.headline !== undefined && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Headline</label>
                    <Input
                      value={editingSection.content.headline || ''}
                      onChange={(e) => handleContentChange('headline', e.target.value)}
                      placeholder="Enter headline..."
                    />
                  </div>
                )}
                
                {editingSection.content.subheadline !== undefined && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Subheadline</label>
                    <Input
                      value={editingSection.content.subheadline || ''}
                      onChange={(e) => handleContentChange('subheadline', e.target.value)}
                      placeholder="Enter subheadline..."
                    />
                  </div>
                )}
                
                {editingSection.content.paragraph !== undefined && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Content/Paragraph</label>
                    <Textarea
                      value={editingSection.content.paragraph || ''}
                      onChange={(e) => handleContentChange('paragraph', e.target.value)}
                      placeholder="Enter content..."
                      rows={4}
                    />
                  </div>
                )}
                
                {editingSection.content.buttonText !== undefined && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Button Text</label>
                      <Input
                        value={editingSection.content.buttonText || ''}
                        onChange={(e) => handleContentChange('buttonText', e.target.value)}
                        placeholder="Enter button text..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Button URL</label>
                      <Input
                        value={editingSection.content.buttonUrl || ''}
                        onChange={(e) => handleContentChange('buttonUrl', e.target.value)}
                        placeholder="Enter button URL..."
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
              
              {(editingSection.type === 'gallery' || editingSection.content.images) && (
                <TabsContent value="images" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Manage Images</h3>
                    <Button onClick={handleImageAdd} size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Image
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {editingSection.content.images?.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                          <Button size="sm" variant="secondary">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleImageRemove(index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {(!editingSection.content.images || editingSection.content.images.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No images added yet</p>
                      <p className="text-sm">Click "Add Image" to get started</p>
                    </div>
                  )}
                </TabsContent>
              )}
            </Tabs>
          )}
          
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSection}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PageContentEditor;
