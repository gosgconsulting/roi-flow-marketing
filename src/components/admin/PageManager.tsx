
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PageManager = () => {
  const [pages, setPages] = useState([
    {
      id: 1,
      title: "Home",
      slug: "/",
      metaTitle: "GO SG - Digital Marketing Agency Singapore",
      metaDescription: "Leading digital marketing agency in Singapore offering SEO, web design, and paid advertising services.",
      status: "published",
      lastModified: "2024-01-15"
    },
    {
      id: 2,
      title: "Website Design",
      slug: "/services/website-design",
      metaTitle: "Website Design Services Singapore | GO SG",
      metaDescription: "Professional website design and development services in Singapore. Custom, responsive websites that convert.",
      status: "published",
      lastModified: "2024-01-14"
    },
    {
      id: 3,
      title: "SEO Services",
      slug: "/services/seo",
      metaTitle: "SEO Services Singapore | Search Engine Optimization",
      metaDescription: "Boost your website rankings with our expert SEO services in Singapore. Increase organic traffic and visibility.",
      status: "published",
      lastModified: "2024-01-13"
    },
    {
      id: 4,
      title: "Contact",
      slug: "/contact",
      metaTitle: "Contact GO SG | Digital Marketing Agency Singapore",
      metaDescription: "Get in touch with GO SG for your digital marketing needs. We're here to help grow your business online.",
      status: "published",
      lastModified: "2024-01-12"
    }
  ]);

  const [editingPage, setEditingPage] = useState<any>(null);

  const handleEditPage = (page: any) => {
    setEditingPage({ ...page });
  };

  const handleSavePage = () => {
    if (editingPage) {
      setPages(pages.map(page => 
        page.id === editingPage.id ? editingPage : page
      ));
      setEditingPage(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Page Manager</h1>
          <p className="text-gray-600 mt-2">Manage your website pages and SEO settings</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Page
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pages.map((page) => (
              <div key={page.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-lg">{page.title}</h3>
                      <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                        {page.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>URL:</strong> {page.slug}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Meta Title:</strong> {page.metaTitle}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Meta Description:</strong> {page.metaDescription}
                    </p>
                    <p className="text-xs text-gray-500">
                      Last modified: {page.lastModified}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditPage(page)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Page: {page.title}</DialogTitle>
                        </DialogHeader>
                        {editingPage && (
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Page Title</label>
                              <Input
                                value={editingPage.title}
                                onChange={(e) => setEditingPage({
                                  ...editingPage,
                                  title: e.target.value
                                })}
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Meta Title</label>
                              <Input
                                value={editingPage.metaTitle}
                                onChange={(e) => setEditingPage({
                                  ...editingPage,
                                  metaTitle: e.target.value
                                })}
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Meta Description</label>
                              <Textarea
                                value={editingPage.metaDescription}
                                onChange={(e) => setEditingPage({
                                  ...editingPage,
                                  metaDescription: e.target.value
                                })}
                                rows={3}
                              />
                            </div>
                            
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" onClick={() => setEditingPage(null)}>
                                Cancel
                              </Button>
                              <Button onClick={handleSavePage}>
                                Save Changes
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageManager;
