
import React from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface SectionEditButtonProps {
  isAdmin: boolean;
  sectionId: string;
  sectionName: string;
  onEdit: (sectionId: string) => void;
}

const SectionEditButton: React.FC<SectionEditButtonProps> = ({
  isAdmin,
  sectionId,
  sectionName,
  onEdit,
}) => {
  if (!isAdmin) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Edit Section</h4>
            <p className="text-sm text-muted-foreground">{sectionName}</p>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={() => onEdit(sectionId)}
              variant="branded"
            >
              Edit Content
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SectionEditButton;
