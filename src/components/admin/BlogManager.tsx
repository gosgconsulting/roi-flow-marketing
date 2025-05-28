
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import BlogPostTable from "./blog/BlogPostTable";
import BlogPostDialog from "./blog/BlogPostDialog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

type BlogPostStatus = 'draft' | 'published' | 'archived';

const BlogManager = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    status: "draft" as BlogPostStatus,
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const createPostMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const postData = {
        ...data,
        published_at: data.status === 'published' ? new Date().toISOString() : null,
      };
      
      const { error } = await supabase
        .from('blog_posts')
        .insert(postData);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      setIsCreateDialogOpen(false);
      resetForm();
      toast({ title: "Blog post created successfully!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error creating post", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const postData = {
        ...data,
        published_at: data.status === 'published' && !editingPost?.published_at 
          ? new Date().toISOString() 
          : editingPost?.published_at,
      };
      
      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      setIsEditDialogOpen(false);
      setEditingPost(null);
      resetForm();
      toast({ title: "Blog post updated successfully!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error updating post", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({ title: "Blog post deleted successfully!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error deleting post", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      featured_image: "",
      status: "draft" as BlogPostStatus,
    });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt || "",
      featured_image: post.featured_image || "",
      status: post.status,
    });
    setIsEditDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updatePostMutation.mutate({ id: editingPost.id, data: formData });
    } else {
      createPostMutation.mutate(formData);
    }
  };

  if (isLoading) return <div>Loading blog posts...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog Manager</h1>
          <p className="text-muted-foreground">Create and manage your blog posts</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>
            Manage your blog posts, edit content, and change publication status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogPostTable
            posts={posts}
            onEdit={handleEdit}
            onDelete={(id) => deletePostMutation.mutate(id)}
            isDeleting={deletePostMutation.isPending}
          />
        </CardContent>
      </Card>

      {/* Create Dialog */}
      <BlogPostDialog
        isOpen={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        title="Create New Blog Post"
        description="Fill in the details to create a new blog post."
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isSubmitting={createPostMutation.isPending}
        submitLabel="Create Post"
      />

      {/* Edit Dialog */}
      <BlogPostDialog
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        title="Edit Blog Post"
        description="Update the blog post details."
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isSubmitting={updatePostMutation.isPending}
        submitLabel="Update Post"
      />
    </div>
  );
};

export default BlogManager;
