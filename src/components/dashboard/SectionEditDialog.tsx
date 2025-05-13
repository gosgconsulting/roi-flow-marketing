
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContentEditor from "@/components/dashboard/ContentEditor";

interface SectionEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentSection: string;
}

const SectionEditDialog: React.FC<SectionEditDialogProps> = ({
  open,
  onOpenChange,
  currentSection
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Edit Section: {currentSection}
          </DialogTitle>
        </DialogHeader>
        <ContentEditor initialSection={currentSection} />
      </DialogContent>
    </Dialog>
  );
};

export default SectionEditDialog;
