
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BlogPostForm from "./BlogPostForm";

type BlogPostStatus = 'draft' | 'published' | 'archived';

interface FormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  status: BlogPostStatus;
}

interface BlogPostDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  submitLabel: string;
}

const BlogPostDialog: React.FC<BlogPostDialogProps> = ({
  isOpen,
  onOpenChange,
  title,
  description,
  formData,
  setFormData,
  onSubmit,
  isSubmitting,
  submitLabel,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <BlogPostForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          onCancel={() => onOpenChange(false)}
          isSubmitting={isSubmitting}
          submitLabel={submitLabel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostDialog;
